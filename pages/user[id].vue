<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { data: users, pending, error } = await useFetch('/api/users');

const user = computed(() => {
  return users.value?.find((u) => u.id === parseInt(route.params.id));
});
</script>

<template>
  <div class="">
    <h1>Hello User</h1>
    <div v-if="pending" class="text-center">
      Loading...
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      Failed to load user data. Please try again later.
    </div>
    <div v-else-if="!user">
      <p>User not found.</p>
    </div>
    <div v-else>
      <h2>User ID: {{ user.id }}</h2>
      <p>Name: {{ user.name.firstname }} {{ user.name.lastname }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Username: {{ user.username }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
    </div>
  </div>
</template>
