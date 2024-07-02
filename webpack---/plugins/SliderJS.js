import {
    lerp
} from '@/plugins/utils'

class Slider {
    constructor(slider, wrapper, slides, gsap) {
        this.slider = slider
        this.wrapper = wrapper
        this.slides = slides
        this.isRun = true
        this.speedCoef = 1
        this.speedCoefTo = 1
        this.speedCoefMax = 3
        this.timeout = null
        this.gsap = gsap

        this.startSymbol = Symbol('start')
        this.endSymbol = Symbol('end')
        this.dxSymbol = Symbol('dx')

        this.render = this.render.bind(this)
        this.changeSpeed = this.changeSpeed.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)
        this.mouseoverHandler = this.mouseoverHandler.bind(this)
        this.mouseleaveHandler = this.mouseleaveHandler.bind(this)
        this.init()
    }

    init() {
        this.placeSlides()
        this.animate()
        this.render()

        this.addEventListeners()
    }

    destroy() {
        this.isRun = false
        this.timeout && clearTimeout(this.timeout)
        this.removeEventListeners()
    }

    addEventListeners() {
        document
            .querySelector('#scroller')
            .addEventListener('scroll', this.scrollHandler)
        this.slider.addEventListener('mouseover', this.mouseoverHandler)
        this.slider.addEventListener('mouseleave', this.mouseleaveHandler)
        this.slider.addEventListener('mousemove', this.mouseoverHandler)

    }

    removeEventListeners() {
        document
            .querySelector('#scroller')
            .removeEventListener('scroll', this.scrollHandler)
        this.slider.removeEventListener('mouseleave', this.mouseoverHandler)
        this.slider.removeEventListener('mouseleave', this.mouseleaveHandler)
        this.slider.removeEventListener('mousemove', this.mouseoverHandler)
    }

    scrollHandler() {
        this.changeSpeed(3)
    }

    mouseoverHandler() {
        this.speedCoefTo = 0
    }

    mouseleaveHandler() {
        this.speedCoefTo = 1
    }

    placeSlides() {
        const slides = this.wrapper.querySelectorAll('.slide')
        if (slides.length === 0) return

        const {
            width
        } = slides[0].getBoundingClientRect()
        const vw = window.innerWidth
        const offset = vw >= 1920 ? 80 :
            vw >= 1440 ? 70 :
            vw >= 1024 ? 56 :
            vw >= 768 ? 40 :
            16

        this.animate()

        const length = this.slides.length
        const left = -(width + offset)
        const right = (width + offset) * (length - 1)
        // setup slides
        Array.from(this.slides).forEach((slide, index) => {
            slide[this.startSymbol] = left
            slide[this.endSymbol] = right
            slide[this.dxSymbol] = (width + offset) * index
            this.gsap.set(slide, {
                x: slide[this.dxSymbol],
            })
        })
    }

    animate() {
        this.gsap
            .timeline({
                scrollTrigger: {
                    trigger: this.slider,
                    start: () => 'top bottom',
                    end: () => 'bottom top',
                    scrub: 0.5,
                },
            })
            .fromTo(
                this.wrapper, {
                    skewY: -10,
                }, {
                    skewY: 5,
                }
            )
    }

    render() {
        if (!this.isRun) return

        const speed = window.innerWidth >= 768 ? 1 : 1
        this.speedCoef = lerp(this.speedCoef, this.speedCoefTo, 0.02)
        Array.from(this.slides).forEach((slide, index) => {
            slide[this.dxSymbol] -= speed * this.speedCoef
            // move slide if it's hidden
            if (slide[this.dxSymbol] < slide[this.startSymbol]) {
                slide[this.dxSymbol] = slide[this.endSymbol]
            }
            // position slide
            slide.style.transform = `translateX(${slide[this.dxSymbol]}px)`
        })
        window.requestAnimationFrame(this.render)
    }

    changeSpeed(coef) {
        this.speedCoefTo = coef
        this.timeout && clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.speedCoefTo = 1
        }, 100)
    }
}

export {
    Slider as
    default
}