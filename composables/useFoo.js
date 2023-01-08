export const useFoo = () => {
    return useState('foo', () => 'bar')
  }

// This also works:

// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
    return useState('foo', () => 'bar')
  }

//Run "nuxi prepare" "nuxi dev", or "nuxi build" to let Nuxt generate the types

// You can then use your composable in a component like so:

/* <template>
  <div>
    {{ foo }}
  </div>
</template>
<script setup>
const foo = useFoo()
</script> */