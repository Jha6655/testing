import * as PIXI from 'pixi.js'

class PIXIApplication {
    constructor() {
        this._app = new PIXI.Application({
            antialias: true,
            autoDensity: true,
            resolution: Math.min(window.devicePixelRatio, 2),
            backgroundAlpha: 0,
            // width: window.innerWidth,
            // height: window.innerHeight
        })
        this._parentDOM = null
        this._view = this._app.view
        this._screen = this._app.screen
        this._renderer = this._app.renderer
        this._stage = this._app.stage
        this._loader = this._app.loader
        this._timeout = null
        this._pixi = PIXI
        // window.addEventListener('resize', this.resize)
    }

    setRendererSize(width, height) {
        this._screen.width = width
        this._screen.height = height
        this._view.width = width
        this._view.height = height
    }

    setParentDOM(container) {
        this._parentDOM = container
        this._app.resizeTo = container
        this._app.resize()
        container.appendChild(this._view)
    }

    getParentDOM() {
        return this._parentDOM
    }

    setScene(container) {
        this._stage.removeChildren()
        this._stage.addChild(container)
    }

    getApplication() {
        return this._app
    }

    getView() {
        return this._view
    }

    getScreen() {
        return this._screen
    }

    getRenderer() {
        return this._renderer
    }

    getStage() {
        return this._stage
    }

    getLoader() {
        return this._loader
    }

    getPIXI() {
        return this._pixi
    }
    // setResizeFunction(func) {
    //   window.removeEventListener('resize', this.resize)
    // }

    resize() {
        if (this._timeout) {
            clearTimeout(this._timeout)
            this._timeout = null
        }
        this._timeout = setTimeout(() => {
            const box = this._parentDOM.getBoundingClientRect()
            this._screen.width = this._view.width = box.width
            this._screen.height = this._view.height = box.height
        }, 100)
    }
}


export default ((context, inject) => {
    inject('pixi_app', new PIXIApplication())
})