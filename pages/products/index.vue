<template>
    <h1 class="font-bold py-5 mx-5 text-lg">Dojo Store - Merch</h1>
    <div class="md:grid md:grid-cols-4 gap-4 px-10">
        <div v-for="p in products" >
           <ProductCard :product="p"/>
        </div>
   </div>
</template>

<script setup>
    // define page meta where the layouts are customized and not default.vue ex.products (/layouts/products)
    definePageMeta({
        layout:'products'
    })

    //fetch the products
    const {data : products} = await useFetch('https://fakestoreapi.com/products')

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