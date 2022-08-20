import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67e99e72 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _9c692a1a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0a8c1e1e = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _78c7e764 = () => interopDefault(import('../pages/contacts/index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _4f5cf735 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _7f3023ee = () => interopDefault(import('../pages/blog/_slug/index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _77c3f6b0 = () => interopDefault(import('../pages/products/_slug/index.vue' /* webpackChunkName: "pages/products/_slug/index" */))
const _35c551f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/ecommerce-example/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _67e99e72,
    name: "about"
  }, {
    path: "/blog",
    component: _9c692a1a,
    name: "blog"
  }, {
    path: "/cart",
    component: _0a8c1e1e,
    name: "cart"
  }, {
    path: "/contacts",
    component: _78c7e764,
    name: "contacts"
  }, {
    path: "/products",
    component: _4f5cf735,
    name: "products"
  }, {
    path: "/blog/:slug",
    component: _7f3023ee,
    name: "blog-slug"
  }, {
    path: "/products/:slug",
    component: _77c3f6b0,
    name: "products-slug"
  }, {
    path: "/",
    component: _35c551f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
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
