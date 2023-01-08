<template>
    <header>
      <nav class="flex items-center justify-between px-4 py-3 bg-gray-800">
        <div class="flex items-center">
          <img src="~/assets/images/nuxt_template_logo.svg" alt="Logo" class="w-24 h-24 rounded-full">
          <span class="text-xl font-semibold text-white ml-2"></span>
        </div>
        <ul class="flex">
          <li><NuxtLink to="/about" class="text-gray-300 hover:text-white mr-4">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1" class="text-gray-300 hover:text-white mr-4">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2" class="text-gray-300 hover:text-white">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>

<style scoped>
/* Transitions for all NuxtPages */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>