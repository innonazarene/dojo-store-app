<template>
   <ProductDetails :product="product" />
</template>

<script setup>
    const id = useRoute().params.id

    const {data : product} = await useFetch('https://fakestoreapi.com/products/'+id)
    definePageMeta({
        layout:'products'
    })
</script>

<style scoped>
    h2{
        margin-bottom:20px;
        font-size: 36px;
    }
    p{
        margin:20px 0;
    }
</style>