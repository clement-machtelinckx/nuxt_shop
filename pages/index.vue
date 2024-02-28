<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products);
const num1 = useRandomMath(20);
const num2 = useRandomMath(20);
const num3 = useRandomMath(20);
console.log(num1);
const randomProduct1 = products[num1 - 1]; // Soustrayez 1 car les indices commencent à partir de 0
const randomProduct2 = products[num2 - 1];
const randomProduct3 = products[num3 - 1];
console.log(products[5]);
console.log(randomProduct1);
console.log(randomProduct2);
console.log(randomProduct3);
</script>

<template>
    <!-- <div>
      <h2>Produit Aléatoire 1</h2>
      <p>Nom: {{ randomProduct1.title }}</p>
      <p>Prix: {{ randomProduct1.price }}</p>

  
      <h2>Produit Aléatoire 2</h2>
      <p>Nom: {{ randomProduct2.title }}</p>
      <p>Prix: {{ randomProduct2.price }}</p>
  
  
      <h2>Produit Aléatoire 3</h2>
      <p>Nom: {{ randomProduct3.title }}</p>
      <p>Prix: {{ randomProduct3.price }}</p>
  

    </div> -->
  </template>
  
