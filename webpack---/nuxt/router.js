import Vue from 'vue'
import Router from 'vue-router'
import {
    normalizeURL,
    decode
} from 'ufo'
import {
    interopDefault
} from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15787b84 = () => interopDefault(
    import ('../pages/about.vue' /* webpackChunkName: "pages/about" */ ))
const _3f1205a8 = () => interopDefault(
    import ('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */ ))
const _42b86930 = () => interopDefault(
    import ('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */ ))
const _ee3dca0c = () => interopDefault(
    import ('../pages/slider.vue' /* webpackChunkName: "pages/slider" */ ))
const _5458c1f0 = () => interopDefault(
    import ('../pages/terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */ ))
const _71c89b2a = () => interopDefault(
    import ('../pages/test.vue' /* webpackChunkName: "pages/test" */ ))
const _35305649 = () => interopDefault(
    import ('../pages/index.vue' /* webpackChunkName: "pages/index" */ ))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
        path: "/about",
        component: _15787b84,
        name: "about___en"
    }, {
        path: "/contacts",
        component: _3f1205a8,
        name: "contacts___en"
    }, {
        path: "/privacy-policy",
        component: _42b86930,
        name: "privacy-policy___en"
    }, {
        path: "/slider",
        component: _ee3dca0c,
        name: "slider___en"
    }, {
        path: "/terms-of-use",
        component: _5458c1f0,
        name: "terms-of-use___en"
    }, {
        path: "/test",
        component: _71c89b2a,
        name: "test___en"
    }, {
        path: "/ua",
        component: _35305649,
        name: "index___ua"
    }, {
        path: "/ua/about",
        component: _15787b84,
        name: "about___ua"
    }, {
        path: "/ua/contacts",
        component: _3f1205a8,
        name: "contacts___ua"
    }, {
        path: "/ua/privacy-policy",
        component: _42b86930,
        name: "privacy-policy___ua"
    }, {
        path: "/ua/slider",
        component: _ee3dca0c,
        name: "slider___ua"
    }, {
        path: "/ua/terms-of-use",
        component: _5458c1f0,
        name: "terms-of-use___ua"
    }, {
        path: "/ua/test",
        component: _71c89b2a,
        name: "test___ua"
    }, {
        path: "/",
        component: _35305649,
        name: "index___en"
    }],

    fallback: false
}

export function createRouter(ssrContext, config) {
    const base = (config._app && config._app.basePath) || routerOptions.base
    const router = new Router({ ...routerOptions,
        base
    })

    // TODO: remove in Nuxt 3
    const originalPush = router.push
    router.push = function push(location, onComplete = emptyFn, onAbort) {
        return originalPush.call(this, location, onComplete, onAbort)
    }

    const resolve = router.resolve.bind(router)
    router.resolve = (to, current, append) => {
        if (typeof to === 'string') {
            to = normalizeURL(to)
        }
        return resolve(to, current, append)
    }

    return router
}