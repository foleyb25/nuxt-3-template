// https://nuxt.com/docs/api/configuration/nuxt-config

// NOTE: scss styling overrides tailwind styling

export default defineNuxtConfig({

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
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'My App',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'My amazing site.' }
        ],
      }
    }
    
})
