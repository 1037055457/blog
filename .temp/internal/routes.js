/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Program Files\\nodejs\\node_modules\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-5cbd1978",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5cbd1978").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-69094a30",
    path: "/articles/git-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-69094a30").then(next)
    },
  },
  {
    name: "v-2b4da164",
    path: "/articles/js-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2b4da164").then(next)
    },
  },
  {
    name: "v-2159974e",
    path: "/articles/css-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2159974e").then(next)
    },
  },
  {
    name: "v-6eb680d7",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6eb680d7").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-c56920ac",
    path: "/guide/guide-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c56920ac").then(next)
    },
  },
  {
    name: "v-6cc484c8",
    path: "/articles/vue-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6cc484c8").then(next)
    },
  },
  {
    name: "v-5cbd7c2a",
    path: "/guide/md-study.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5cbd7c2a").then(next)
    },
  },
  {
    name: "v-911a06ec",
    path: "/guide/bushu.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-911a06ec").then(next)
    },
  },
  {
    name: "v-34156c7a",
    path: "/articles/xcx-about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-34156c7a").then(next)
    },
  },
  {
    name: "v-7df443aa",
    path: "/guide/vue-press-study.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7df443aa").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]