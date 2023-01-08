<template>
   <footer class="px-4 py-3 bg-gray-800 text-gray-300 flex justify-between">
      <div class="w-1/4">
        <img src="~/assets/images/nuxt_template_logo.svg" alt="Logo" class="w-32 h-32 rounded-full">
      </div>
      <div class="w-1/4">
        <div class="border-b border-gray-700 mb-4 pb-4">
          <h3 class="text-xl font-bold uppercase tracking-wide">Navigation</h3>
        </div>
        <ul>
          <li><NuxtLink to="/about" class="block font-semibold text-gray-300 hover:text-white mb-2">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1" class="block font-semibold text-gray-300 hover:text-white mb-2">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2" class="block font-semibold text-gray-300 hover:text-white mb-2">Post 2</NuxtLink></li>
        </ul>
      </div>
    </footer>
  </template>