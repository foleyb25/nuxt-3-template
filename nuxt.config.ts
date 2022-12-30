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
    
})
