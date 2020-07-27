// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "~/assets/reset.css"
import "~/assets/global.css"
import "katex/dist/katex.min.css"
import "@primer/css/index.scss"
import "gridsome-plugin-remark-prismjs-all/themes/solarized.css"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
