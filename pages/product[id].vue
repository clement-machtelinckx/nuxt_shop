
<template>
    <div>
        <h1>Detail produit</h1>
        <p>Product ID: {{ $route.params.id }}</p>
        <h2>{{ product.title }}</h2>
        <img :src="product.image" :alt="product.title" />

    </div>
</template>

<script setup lang="ts">
const product_id = {$route.params.id};
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${$route.params.id}`);
console.log(product_id);
</script>

