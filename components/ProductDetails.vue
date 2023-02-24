<template>
    <div class="md:grid md:grid-cols-2 pb-32 gap-4 max-h-full">
        <div class="p-7">
            <img class="w-full h-96 md:px-40 " :src="`${product.image}`" alt="River">
        </div>
        <div class="p-7 border-b-2">
            <h1 class="font-bold text-4xl text-teal-700 pb-10">
                {{ product.title }}
            </h1>
            <p class="text-md pb-5"> {{ product.description }} </p>
            <p class="text-md py-1"> <span class="font-bold text-lg">Rating : </span> {{ product.rating.rate }}  <span class="font-bold text-lg">Count : </span> {{ product.rating.count }} </p>
            <p class="text-md"> <span class="font-bold text-lg">Category : </span> {{ product.category }} </p>
            <p class="text-md text-4xl"> <span class="font-bold text-lg">Price : </span> ₱ {{ product.price }} </p>
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style scoped>

</style>