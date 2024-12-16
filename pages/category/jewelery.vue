<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products/category/jewelery')
console.log(products)
</script>


<template>
    <div>

        <h1>Jewelery</h1>

      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        <!-- <div><button @click="refresh">refresh page</button></div> -->
        <table class="table-auto border-2">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <!-- <th scope="col">description</th> -->
              <th scope="col">price</th>
              <!-- <th scope="col">category</th> -->
              <th scope="col">rating</th>
              <th scope="col">avis</th>
              <th scope="col">infos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.name">
              <td class="border border-slate-300">{{ product.id }}</td>
              <td class="border border-slate-300">{{ useTruncable(product.title, 40) }}</td>
              <!-- <td class="border border-slate-300">{{ product.description }}</td> -->
              <td class="border border-slate-300">{{ product.price }} $$</td>
              <!-- <td class="border border-slate-300">{{ product.category }}</td> -->
              <td class="border border-slate-300">{{ product.rating.rate }}/5 </td>
              <td class="border border-slate-300">{{ product.rating.count }} </td>
              <td class="border border-slate-300"><button><NuxtLink :to="`/detail_product${product.id}`">See more</NuxtLink></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>