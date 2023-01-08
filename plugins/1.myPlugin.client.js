// Plugins can be registered in particular order based on x.(1.) prefix and 2. 3. ... so on
// the suffix .client or .server determines if the plugin is run on the client or server
export default defineNuxtPlugin(() => {
    return {
      provide: {
        hello: (msg) => `Hello ${msg}!`
      }
    }
  })

//vue plugin import

// run "npm install vue-plugin-name"

// then create file plugins/vue-plugin-name.client.js


// Then use the following code as an example:

// import VuePlugin from 'vue-plugin-name'
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(VuePlugin, {
//     property: {
//       id: 'GA_MEASUREMENT_ID'
//     }
//   })
// })

// Use this code to register a custom directive. This creates v-focus:

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.directive('focus', {
//       mounted (el) {
//         el.focus()
//       },
//       getSSRProps (binding, vnode) {
//         // you can provide SSR-specific props here
//         return {}
//       }
//     })
//   })