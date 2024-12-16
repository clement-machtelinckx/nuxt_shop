<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products);
const num1 = useRandomMath(20);
const num2 = useRandomMath(20);
const num3 = useRandomMath(20);

</script>

<template>

  <h1>Article selection</h1>

  <p class="flex justify-content mx-32 mb-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div>
      <div class="flex-1 flex items-start">
          <div class="w-40">
            <img :src="products[num1].image" :alt="products[num1].title" class="img_product object-cover" />
          </div>
          <div class="flex-1 p-4">
            <h3 class="text-lg font-semibold mb-2">{{ products[num1].title }}</h3>
            <h2 class="text-gray-700">{{ products[num1].category }}</h2>
            <p class="text-gray-700">{{ useTruncable(products[num1].description, 100) }}</p>

            <p class="text-xl font-bold mt-2">{{ products[num1].price }} $</p>
            <p>rank {{ products[num1].rating.rate }} <iconsStar /> by {{ products[num1].rating.count }} Users</p>
          </div>
        </div>
        <div class="mt-auto flex justify-end">
          <button><NuxtLink :to="`/detail_product${products[num1].id}`">See more</NuxtLink></button>
        </div>
    </div>
    <div>
      <div class="flex-1 flex items-start">
          <div class="w-40">
            <img :src="products[num2].image" :alt="products[num2].title" class="img_product object-cover" />
          </div>
          <div class="flex-1 p-4">
            <h3 class="text-lg font-semibold mb-2">{{ products[num2].title }}</h3>
            <h2 class="text-gray-700">{{ products[num2].category }}</h2>
            <p class="text-gray-700">{{ useTruncable(products[num2].description, 100) }}</p>

            <p class="text-xl font-bold mt-2">{{ products[num2].price }} $</p>
            <p>rank {{ products[num2].rating.rate }} <iconsStar /> by {{ products[num2].rating.count }} Users</p>
          </div>
        </div>
        <div class="mt-auto flex justify-end">
          <button><NuxtLink :to="`/detail_product${products[num2].id}`">See more</NuxtLink></button>
        </div>

    </div>
    <div>
      <div class="flex-1 flex items-start">
          <div class="w-40">
            <img :src="products[num3].image" :alt="products[num3].title" class="img_product object-cover" />
          </div>
          <div class="flex-1 p-4">
            <h3 class="text-lg font-semibold mb-2">{{ products[num3].title }}</h3>
            <h2 class="text-gray-700">{{ products[num3].category }}</h2>
            <p class="text-gray-700">{{ useTruncable(products[num3].description, 100) }}</p>

            <p class="text-xl font-bold mt-2">{{ products[num3].price }} $</p>
            <p>rank {{ products[num3].rating.rate }} <iconsStar /> by {{ products[num3].rating.count }} Users</p>
          </div>
        </div>
        <div class="mt-auto flex justify-end">
          <button><NuxtLink :to="`/detail_product${products[num3].id}`">See more</NuxtLink></button>
        </div>
    </div>

  </div>

  </template>
  
