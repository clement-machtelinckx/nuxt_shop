<script setup lang="ts">
import Card from '~/components/modules/Card.vue';
import { ref, computed } from 'vue';
import { useFetch } from '#app';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const { data: products, pending, error } = await useFetch<Product[]>('https://fakestoreapi.com/products');

function getRandomIndices(length: number, count: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * length));
  }
  return Array.from(indices);
}

const randomProducts = computed(() => {
  if (products.value && products.value.length >= 3) {
    const indices = getRandomIndices(products.value.length, 3);
    return indices.map(index => products.value[index]);
  }
  return [];
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Article Selection</h1>
    <p class="flex justify-center mx-32 mb-10">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    </p>

    <div v-if="pending" class="text-center">
      Loading...
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      Failed to load products. Please try again later.
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card 
        v-for="product in randomProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>
