// https://nuxt.com/docs/api/configuration/nuxt-config

// NOTE: scss styling overrides tailwind styling

export default defineNuxtConfig({

  // You can also import tailwind with modules and @nuxtjs/tailwindcss dev dependency
  // modules: [
  //   '@nuxtjs/tailwindcss'
  // ],

  vite: {
      css: {
        preprocessorOptions: {
          scss: 
          {
              additionalData: '@use "@/assets/styles/_utilities.scss" as *;'
          }
        }
      }
    },
  css: ['~/assets/styles/main.css', '~/assets/styles/main.scss'],
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },

  //Pull your .env variables here. to use in application call - {testKey} = useRuntimeConfig()
  //To expose variables to browser put keys inside of public
  runtimeConfig: {
    testKey: process.env.TEST_KEY,
    public: {

    }
  }
    
})
