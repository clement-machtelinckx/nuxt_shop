<script setup lang="ts">
import Card from '~/components/modules/Card.vue';
const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products');

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  type: Object,
  required: true,
  rating: {
    rate: number;
    count: number;
  };
}

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Product Page</h1>

    <div v-if="pending" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Failed to load products. Please try again later.</p>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
