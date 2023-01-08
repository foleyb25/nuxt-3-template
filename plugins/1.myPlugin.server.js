// Plugins can be registered in particular order based on x.(1.) prefix and 2. 3. ... so on
// the suffix .client or .server determines if the plugin is run on the client or server
export default defineNuxtPlugin(() => {
    return {
      provide: {
        hello: (msg) => `Hello ${msg}!`
      }
    }
  })

  //In a component use:

/* <template>
  <div>
    {{ $hello('world') }}
  </div>
</template>
<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script> */