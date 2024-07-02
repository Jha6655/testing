import Swiper, {
    Autoplay,
    EffectCreative,
    Mousewheel,
    FreeMode
} from 'swiper'
export default function({
    app
}, inject) {
    Swiper.use([Autoplay, EffectCreative, Mousewheel, FreeMode])
    inject('swiper', Swiper)
}