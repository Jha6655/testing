import * as THREE from 'three'
import gsap from 'gsap'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    DRACOLoader
} from 'three/examples/jsm/loaders/DRACOLoader.js'
const EventEmitter = require('events')

// function mapping(x, newX, progress) {
//   return x + (newX - x) * progress
// }
function lerp(t, a, b) {
    return (1 - t) * a + b
}

const fogColor = 0x7a7a7a
// const fogColor = 0x454546
const fogColorDark = 0x454546

class TV {
    constructor(parentDOM, label = null, video) {

        this.toneMappingExposureMax = 3.0
        this.toneMappingExposureMin = 0.6
        // parent
        this.parent = parentDOM
        this.video = video
        this.videoTexture = new THREE.VideoTexture(video);
        this.videoTexture.encoding = THREE.sRGBEncoding;
        this.videoTexture.repeat.set(1.7, 1.7)
        this.videoTexture.offset.x = -0.64
        this.videoTexture.offset.y = -0.42
        this.videoTexture.flipY = false
        // label

        this.label = label

        // mouse position

        this.mouseTarget = new THREE.Vector2(0, 0)
        this.time = 0

        // NDC

        this._NDC = {
            x: 0,
            y: 0,
        }

        // intersects

        this._intersects = []

        // sizes
        this.sizes = {
            width: this.parent.getBoundingClientRect().width,
            height: this.parent.getBoundingClientRect().height,
            get aspect() {
                return this.width / this.height
            },
        }
        this.mouse = new THREE.Vector2(this.sizes.width / 2, this.sizes.height / 2)

        // renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMappingExposure = this.toneMappingExposureMax
        this.renderer.toneMapping = THREE.CineonToneMapping
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this._setRendererSizes()
        this.renderer.setClearColor(fogColor, 1)

        // canvas
        this.canvas = this.renderer.domElement
        this.parent.prepend(this.canvas)

        // geometry, material, mesh
        this.geometry = null
        this.material = null
        this.mesh = null
        this.progress = 0

        // model
        this.model = null
        this.modelPosition = null

        // scene
        this.scene = new THREE.Scene()

        this.scene.fog = new THREE.Fog(fogColor, 27, 29);

        // camera
        this.camera = null

        this.cameraPosition = {
            x: 0,
            y: -0.5,
            z: 20,
        }

        this.cameraPositionEnd = {
            x: 0,
            y: 0,
            z: 3,
        }

        // light
        this.ambientLight = null
        this.pointLight = null
        this.light = null

        // raycaster
        this.raycaster = new THREE.Raycaster()

        // loader
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath(
            '/scripts/draco/'
        )
        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.setDRACOLoader(this.dracoLoader)

        // on-off button
        this.button = null

        this.eventEmitter = new EventEmitter()
        this.event = null

        document.addEventListener("mouseleave", (event) => {

            if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {

                this.setMousePosition(this.sizes.width / 2, this.sizes.height / 2)

            }
        });
    }

    async init() {
        try {
            await this.loadModel()
        } catch (error) {
            console.log('Error on loading model: ', error)
        }
        this.createCamera()
        this.createLights()
        this._render()
        return Promise.resolve()
    }

    toggleNightModeTV() {
        let target
        let triggerpos
        if (this.renderer.toneMappingExposure < 1) {
            target = this.toneMappingExposureMax
            triggerpos = 0
            this.scene.fog = new THREE.Fog(fogColor, 27, 29);
            this.renderer.setClearColor(fogColor, 1)
        } else {
            target = this.toneMappingExposureMin
            triggerpos = 0.45
            this.scene.fog = new THREE.Fog(fogColorDark, 27, 29);
            this.renderer.setClearColor(fogColorDark, 1)
        }
        gsap.to(this.renderer, {
            toneMappingExposure: target,
            duration: 0.4,
            overwrite: true,
        })

        gsap.to(this.triggerEl.position, {
            x: triggerpos,
            duration: 0.4,
            overwrite: true,
        })
    }

    loadModel() {
        this.trigger = new THREE.Mesh(
            new THREE.BoxBufferGeometry(0.9, 1.8, 1.8),
            new THREE.MeshBasicMaterial({
                color: 0xff0000
            })
        )
        this.fakeTrigger = new THREE.Mesh(
            new THREE.BoxBufferGeometry(0.9, 1.8, 1.8),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00
            })
        )

        this.scene.add(this.trigger)
        this.trigger.visible = false
        this.fakeTrigger.visible = false
        this.trigger.position.x = this.fakeTrigger.position.x = -1.3
        this.trigger.position.y = this.fakeTrigger.position.y = -1.7
        this.trigger.position.z = this.fakeTrigger.position.z = 2

        if (window.innerWidth < 768) {

            this.trigger.position.x = 0
            this.trigger.position.y = 0
            // this.trigger.position.z = 0
            this.trigger.scale.set(3, 3, 3)

        }

        return new Promise((resolve, reject) => {
            this.gltfLoader.load(
                '/models/tv1.glb',
                (gltf) => {
                    this.model = gltf.scene

                    this.triggerEl = this.model.getObjectByName('Cube001')
                    this.button = this.model.getObjectByName('Cube001')

                    this.plane = this.model.getObjectByName('Plane')
                    this.tv = this.model.getObjectByName('Cube001')
                    this.screen = this.model.getObjectByName('Glass')
                    this.screen.material = new THREE.MeshBasicMaterial({
                        map: this.videoTexture
                    })

                    this.triggerEl.material = new THREE.MeshBasicMaterial({
                        color: 0x000000,
                    })
                    this.groupnames = []
                    // this.screen.material = this.material
                    this.scene.add(gltf.scene)
                    resolve()
                },
                () => {
                    // console.log('progress')
                },
                (error) => {
                    reject(error)
                }
            )
        })
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(45, this.sizes.aspect, 0.1, 100)
        this.camera.position.set(
            this.cameraPosition.x,
            this.cameraPosition.y,
            this.cameraPosition.z
        )
        this.camera.lookAt(0, 0, 0)
        this.scene.add(this.camera)
    }

    createLights() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        this.scene.add(this.ambientLight)
        this.pointLight = new THREE.PointLight(0xffffff, 0.5)
        this.pointLight.position.x = 0
        this.pointLight.position.y = 3
        this.pointLight.position.z = 0.5
        this.scene.add(this.pointLight)
    }

    _setRendererSizes() {
        this.renderer.setSize(this.sizes.width, this.sizes.height)
    }

    _setLabelPosition() {
        if (!this.trigger) return
        const point = this.fakeTrigger.position.clone()
        point.project(this.camera)
        const translate = {
            x: point.x * this.sizes.width * 0.5,
            y: -point.y * this.sizes.height * 0.5,
        }
        this.label.style.transform = `translate(${translate.x}px, ${translate.y}px)`
    }

    animateCameraPosition(progress) {
        this.progress = progress

        if (progress > 0.99) this.eventEmitter.emit(this.event)
    }

    rotateCamera() {
        this.mouseTarget.lerp(this.toNDC(), 0.05)
        this.camera.position.x =
            0.5 * 14.7 * this.mouseTarget.x * (1 - this.progress)
        this.camera.position.y =
            0.5 * -2.7 * this.mouseTarget.y * (1 - this.progress) + 0.5
        this.camera.lookAt(0, 0.5, 0)
        this.camera.position.z = lerp(this.progress, 20, 3.6)
        this.camera.position.y = lerp(this.progress, -0.5, 0.5)
        this.camera.lookAt(0, 0.5, 0)
    }

    _intersect() {
        this.raycaster.setFromCamera(this._NDC, this.camera)
        this._intersects = this.raycaster.intersectObjects([this.trigger])
    }

    getIntersects(onlyNames = false) {
        this._intersect()
        if (this._intersects.length > 0) return ['button']
        else return ['none']
    }

    setLabel(element) {
        this.label = element
    }

    _render() {
        this.renderer.render(this.scene, this.camera)
        this._setLabelPosition()
        this.rotateCamera()
        requestAnimationFrame(this._render.bind(this))
    }

    setMousePosition(x, y) {
        this.mouse.x = x
        this.mouse.y = y

        this._NDC = this.toNDC()
    }

    toNDC() {
        return {
            x: (this.mouse.x / this.sizes.width) * 2 - 1,
            y: -(this.mouse.y / this.sizes.height) * 2 + 1,
        }
    }

    getNDC() {
        return this._NDC
    }

    resize() {
        const box = this.parent.getBoundingClientRect()
        this.sizes.width = box.width
        this.sizes.height = box.height
        this._setRendererSizes()
        this.camera.aspect = this.sizes.aspect
        this.camera.updateProjectionMatrix()
    }

    on(event, cb) {
        this.event = event
        this.eventEmitter.once(event, cb)
    }
}

export {
    TV
}