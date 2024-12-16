<script setup lang="ts">
import Card from '~/components/modules/Card.vue'; 
import { useRoute } from 'vue-router';

const route = useRoute(); // Accéder aux paramètres de l'URL
const { data: product, pending, error } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
); 

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
  <div class="flex flex-col items-center justify-center">
    <div v-if="pending" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Failed to load the product. Please try again later.</p>
    </div>
    <div v-else>
      <Card :product="product" />
    </div>
  </div>
</template>
