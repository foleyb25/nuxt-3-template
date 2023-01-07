<template>
    <div>
        <h1>This is a singular post page</h1>
        <p>Route Parameter ID: {{ id }}</p>
        <p>{{ $route.params.id }}</p>
    </div>
</template>

<script setup>

const {id} = useRoute().params

const state = reactive({
    paramID: id
})

console.log(id)

</script>

