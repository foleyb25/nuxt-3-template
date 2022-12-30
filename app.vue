<template>
  <div>
    <NuxtLayout name="default">
      <h1 class="bg-blue-200 h-[600px] scss-style">Welcome to the homepage</h1>
      <AppAlert>
        This is an auto-imported component.
      </AppAlert>
    </NuxtLayout>
    
  </div>
</template>

<script setup>
definePageMeta({ //This isn't needed but gives you an idea as to how you can use a custom layout or additional layouts
  layout: "default"
})


</script>