<script setup>
// const route = useRoute();
// console.log(route);

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
</script>

<template>
    <div>
        <h1>hello user</h1>
        user id : {{ $route.params.id }}
        <p>{{ json }}</p>

    </div>
</template>