<template>
    <div class="mx-10 py-10">
        <h2>Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel, dignissimos necessitatibus architecto facilis suscipit tempora in labore eius reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel, dignissimos necessitatibus architecto facilis suscipit tempora in labore eius reprehenderit.</p>
    </div>
</template>

<script setup>
    // define page meta where the layouts are customized and not default.vue ex.products (/layouts/products)
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