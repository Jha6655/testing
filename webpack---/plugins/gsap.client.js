import {
    gsap
} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
// import ScrollToPlugin from 'gsap/ScrollToPlugin'
export default (({
    app
}, inject) => {
    ScrollTrigger.defaults({
        scroller: "#scroller",
        start: () => `top bottom`,
    })
    gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, MotionPathPlugin, ScrollToPlugin)
    const gs = gsap
    inject('gsap', gs)
    inject('st', ScrollTrigger)
})