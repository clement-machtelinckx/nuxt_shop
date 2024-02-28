<script setup>
const route = useRoute();
console.log(route);
</script>

<template>
    <div>
        <h1>hello user</h1>
        user id : {{ $route.params.id }}
    </div>
</template>