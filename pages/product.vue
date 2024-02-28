<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <h1 class="text-2xl font-bold mb-4">Product Page</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="border rounded-lg overflow-hidden shadow-md">
            <img :src="product.image" :alt="product.title" class=" img_product object-cover">
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
                <p class="text-gray-700">{{ product.description }}</p>
                <p class="text-xl font-bold mt-2">{{ product.price }} $</p>
                <button><NuxtLink :to="`/product${product.id}`">See more</NuxtLink></button>
            </div>
        </div>
    </div>
</template>
