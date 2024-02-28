<script setup lang="ts">
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
  </div>
</template>
