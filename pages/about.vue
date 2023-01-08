<template>
    <div>
        <h1>About</h1>
        <!-- {{ foo }} -->
        {{ $hello('world') }}
    </div>
</template>

<script setup> 
// experiment using composable
// const foo = useFoo()

// experiment using plugin
const { $hello } = useNuxtApp()

</script>
