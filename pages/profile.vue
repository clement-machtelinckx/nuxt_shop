<script setup lang="ts">
const { data: users, pending, error } = await useFetch('/api/users');


const userList = computed(() => {
  return users?.value?.map((user) => ({
    id: user.id,
    name: `${user.name.firstname} ${user.name.lastname}`,
    email: user.email,
    username: user.username,
    phone: user.phone,
    address: `Number ${user.address.number}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`, 
  }));
});
</script>

<template>
    <div class="">
      <h1 class="text-2xl font-bold mb-4">User List</h1>
  
      <div v-if="pending" class="text-center">
        Loading...
      </div>
  
      <div v-else-if="error" class="text-center text-red-500">
        Failed to load user data. Please try again later.
      </div>

      <div v-else>
        <ul class="space-y-4">
          <li
            v-for="user in userList"
            :key="user.id"
            class="border p-4 rounded-lg shadow-md"
          >
            <h2 class="text-lg font-semibold">Name: {{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
            <p>Username: {{ user.username }}</p>
            <p>Phone: {{ user.phone }}</p>
            <p>Address: {{ user.address }}</p>
            <NuxtLink :to="`/profile${ user.id }`" class="text-blue-500">See more</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
