<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products);
</script>

<template>
    <h1 class="text-2xl font-bold mb-4">Product Page</h1>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded-lg overflow-hidden shadow-md flex flex-col"
      >

        <div class="flex-1 flex items-start">
          <div class="w-40">
            <img :src="product.image" :alt="product.title" class="img_product object-cover" />
          </div>
          <div class="flex-1 p-4">
            <h3 class="text-lg font-semibold mb-2">{{ product.title }}</h3>
            <h2 class="text-gray-700">{{ product.category }}</h2>
            <p class="text-gray-700">{{ useTruncable(product.description, 100) }}</p>

            <p class="text-xl font-bold mt-2">{{ product.price }} $</p>
            <p>rank {{ product.rating.rate }} <iconsStar /> by {{ product.rating.count }} Users</p>
          </div>
        </div>
        <div class="mt-auto flex justify-end">
          <button><NuxtLink :to="`/detail_product${product.id}`">See more</NuxtLink></button>
        </div>
      </div>
    </div>
  </template>
  