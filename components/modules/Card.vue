<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ product: Product }>();

</script>

<template>
  <!-- <div class="border rounded-lg overflow-hidden shadow-md flex flex-col w-30 h-25">
    <img :src="product.image" :alt="product.title" class="object-cover w-full h-40" />

    <div class="p-4 ">
      <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
      <p class="text-gray-700 mb-2">{{ product.category }}</p>
      <p class="text-gray-700 mb-4">{{ useTruncable(product.description, 100) }}</p>
      <p class="text-xl font-bold mb-2">{{ product.price }} $</p>
      <p class="text-yellow-500">
        {{ product.rating.rate }} ★ ({{ product.rating.count }} Reviews)
      </p>
      <NuxtLink :to="`/detail_product${product.id}`" class="text-blue-500">ha you noob</NuxtLink>
    </div>
  </div> -->


<div>
    <div>
      <div class="flex-1 flex items-start">
        <div class="w-40">
          <img :src="product.image" :alt="product.title" class="img_product object-cover" />
        </div>
        <div class="flex-1 p-4">
          <h3 class="text-lg font-semibold mb-2">{{ product.title }}</h3>
          <h2 class="text-gray-700">{{ product.category }}</h2>
          <p class="text-gray-700">{{ useTruncable(product.description, 100) }}</p>

          <p class="text-xl font-bold mt-2">{{ product.price }} $</p>
          <p class="text-yellow-500">rank {{ product.rating.rate }} <iconsStar /> by {{ product.rating.count }} Users</p>
        </div>
      </div>
    </div>
    <div class="mt-auto flex justify-end">
      <NuxtLink 
        v-if="product.id" 
        :to="`/detail_product${product.id}`" 
        class="text-blue-500">
        See more
      </NuxtLink>
    </div>
  </div>

</template>


