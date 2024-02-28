<script setup lang="ts">
const route = useRoute();
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);

</script>

<template>
    <div class="container flex justify-between ">
        <div class="container mt-5">
            <h1>detail product : {{ product.title }}</h1>
            <h2 class="mt-5">category : {{ product.category }}</h2>
            <h2 class="mt-5">description</h2>
            <p class="max-w-80 ml-20">{{ product.description }}</p>
            <p class="max-w-80 ml-20 mt-5">rank {{ product.rating.rate }} <iconsStar /> by {{ product.rating.count }} Users</p>
            <h1 class="mt-5">{{ product.price }} $$</h1>
        </div>

        <div>
            <img class="mt-5" :src="product.image" :alt="product.title">
        </div>
    </div>
</template>