export default defineEventHandler(async (event) => {

    const { testParam } = event.context.params
    const { testKey } = useRuntimeConfig()
  
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${testParam}&apikey=${testKey}`
    
    const { data } = await $fetch(uri)
  
    return data
  })