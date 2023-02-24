<template>
    <div>
        <h2>Products {{ id }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sed iusto quam ipsum quaerat, ad cupiditate tempora ut nisi quisquam amet corrupti voluptates sequi doloribus, officiis architecto dicta quae optio.</p>
    </div>
</template>

<script setup>
    const id = useRoute().params
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