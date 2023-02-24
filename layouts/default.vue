<template>
    <header>
        <nav>
            <NuxtLink to="/">Dojo - Store</NuxtLink>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink> </li>
                <li><NuxtLink to="/about">About</NuxtLink> </li>
                <li><NuxtLink to="/products">Products</NuxtLink> </li>
            </ul>
        </nav>
    </header>

    <!-- Output the page content -->
    <div>
        <slot />
    </div>
</template>

<style scoped>
    .router-link-exact-active
    {
        color:#12b448;
    }
</style>