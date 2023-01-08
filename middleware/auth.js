// Auth Navigation Middleware

//This will block all navigation which contains the paramter id 3
//You can test this out by creating <li><NuxtLink to="/posts/3">Post 3</NuxtLink></li>
//NuxtLink in the Header or footer. The navigation will be blocked
//This middleware is used in pages/posts/[id].vue
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === '3') {
      return abortNavigation()
    }
    // return navigateTo('/')
  })

// use the auth.js middleware by using the following syntax in a component
/* <script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script> */