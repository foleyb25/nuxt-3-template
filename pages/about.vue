<template>
    <div>
        <h1>About</h1>
        <!-- {{ foo }} -->
        <!-- {{ $hello('world') }} -->
    </div>
</template>

<script setup> 
// experiment using composable
// const foo = useFoo()

// experiment using plugin
// const { $hello } = useNuxtApp()

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

</script>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

</style>