<script setup lang="ts">
import Card from '~/components/modules/Card.vue';
const { pending, data: productInfo, refresh } = useAsyncData('productInfo', async () => {
    const [products, category] = await Promise.all([
        $fetch('https://fakestoreapi.com/products'),
        $fetch('https://fakestoreapi.com/products/categories')]);

        return {
            products,
            category,
        }
}, {
    lazy: false,
    transform: (productInfo) => {
      return {
        category: productInfo.category,
        products: productInfo.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }))
      }
    }
})
</script>


<template>
  <div>

    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
        <div v-for="product in productInfo.products">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.image }}</p>
        </div>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="product in productInfo.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
