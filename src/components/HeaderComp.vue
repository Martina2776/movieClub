<script setup>
import logo from '../assets/logo.png';
</script>

<template>
    <header>
        <img :src="logo" alt="logo" class="logo" />
        <nav>
            <RouterLink to="/" >Home</RouterLink>
            <RouterLink to="/drama">Drama</RouterLink>
            <RouterLink to="/comedy">Comedy</RouterLink>
            <RouterLink to="/animation">Animation</RouterLink>
            <RouterLink to="/action">Action</RouterLink>
        </nav>
    </header>
</template>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 200px;
    box-shadow: none;
    text-align: right;
    display: inline-block;
}

nav {
    margin: 40px auto;
    text-align: right;
    text-transform: uppercase;
    font-weight: 900;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
}

nav a {
    text-decoration: none;
    margin-right: 50px;
    padding: 8px;
    background-color: var(--color-links-nav);
    color: var(--color-background);
    border-radius: 12px;
    min-width: 150px;
    display: inline-block;
    text-align: center;
    box-shadow: 10px 0 6px #00000070;
    height: 40px;
}

a {
    text-decoration: none;
    color: var(--color-links);
}

* {
    box-sizing: border-box;
}
</style>