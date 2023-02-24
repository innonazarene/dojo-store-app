<template>
    <div class="rounded overflow-hidden shadow-lg h-full mb-5">
        <img class="w-full h-36 px-20 border-2" :src="`${product.image}`" alt="River">
        <div class="px-6 py-4 min-h-14 max-h-24 pb-5">
            <div class="font-bold text-xl mb-2">{{product.title}}</div>
        </div>
        <div class="px-5 py-2 grid grin-cols-4">
            <p class="text-lg px-5" ><span class="font-bold">Price :</span> ₱ {{ product.price }}</p>
            <NuxtLink class="btn mb-4 mt-10" :to="`/products/${product.id}`">View Product</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style scoped>

</style>