<template>
    <div>
        <p>Route Parameter ID: {{ id }}</p>
    </div>
</template>

<script setup>

const {id} = useRoute().params


definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'

  //   layout: "customLayout",   define custom layout and use follwoing tage <NuxtLayout name="customLayout">
  // title: "Nuxt Template"  Meta tags can also be set in definePageMeta()
})

//make a fetch to an API. This url will not work
const uri = 'https://templateNuxt.com/products/' + id
//  fetch the dummyObjject
const { data: product, pending, refresh, error } = await useFetch(uri, { key: id })

//pending refresh and error are default values returned from useFetch composable

//Here is an example of how refresh() can be used
function previous() {
  page.value--;
  refresh();
}
function next() {
  page.value++;
  refresh();
}

//other fetch techniques include:
//useLazyFetch()
//useAsyncData()
//useLazyAsyncData()


//Need to set up error page handling for items that don't exist on the server
//If we don't make this check the page will render with missing content

//dummyObject simulating a product or a blog post with unique id
var dummyObject = null

//There are only routes [1] and [2] defined in this application, this is arbitrary
//We will assume any ids other than 1 and 2 don't exist. 
if (id == 1 || id == 2) {
    dummyObject = {}
}

if (!dummyObject) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

</script>

