<template>
  <div>
    <!-- These head attributes can also be defined reactively in setup -->
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children=""></Style>
    </Head>
    <NuxtLayout name="default">
      <NuxtPage class="h-screen flex flex-col justify-center items-center"/>
    </NuxtLayout>
    
  </div>
</template>

<script setup>

const title = ref("Nuxt Template")

definePageMeta({ //This isn't needed but gives you an idea as to how you can use a custom layout or additional layouts
  layout: "default",
  // title: "Nuxt Template"  Meta tags can also be set in definePageMeta()
})

//Reactive Meta
//usehead() gives you ability to define meta tags on specific pages like a single blog post :og tags
useHead({
  title: 'Nuxt Template',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: (() => {
      return 'test'
    })
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})


</script>


<style>
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