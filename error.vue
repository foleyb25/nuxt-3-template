<template>
    <div class="mt-24 flex flex-col justify-center items-center">
      <img class="w-48 rounded-full" src="~/assets/images/nuxt_template_logo.svg" alt="">
      <p class="mt-8 text-7xl font-bold">{{error.statusCode}}</p>
      <p class="mt-8 text-6xl">Ooops.</p>
      <p class="mt-8">{{error.message}}</p>
      <button class="btn my-8" @click="handleError">Go Home...</button>
    </div>
  </template>
  
  <script setup>
    defineProps({
      error: Object
    })
    const handleError = () => clearError({ redirect: '/' })
  </script>