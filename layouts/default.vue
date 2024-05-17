<template>
    <header style="display: flex; flex-direction: row; gap: 40px; align-items: center; padding: 10px 10%; margin: 0 0 50px; background-color: #060155;">
        <img src="public/logo.png" alt="" style="width: 40px; height: 40px;">
        <NuxtLink style="text-decoration: none; color: white;" to="/"><h1 style="font-size: 20px; ">Home</h1></NuxtLink>
        <NuxtLink style="text-decoration: none; color: white;" to="/categorias"><h1 style="font-size: 20px;">Categorias</h1></NuxtLink>
    </header>
    <slot></slot>
</template>