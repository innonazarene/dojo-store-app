<template>
    <div>
        <header class="shadow-sm bg-black text-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Dojo - Store</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink> </li>
                    <li><NuxtLink to="/about">About</NuxtLink> </li>
                    <li><NuxtLink to="/products" >Products</NuxtLink> </li>
                </ul>
            </nav>
        </header>

        <!-- Output the page content -->
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active
    {
        color:#12b448;
    }
</style>