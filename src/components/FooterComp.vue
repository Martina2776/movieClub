<script setup>
import logoSvg from '../assets/logo.svg'
</script>

<template>
    <footer>
        <div>
            <h1>moVie</h1>
        <ul>
            <nav>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/drama">Drama</RouterLink></li>
                <li><RouterLink to="/comedy">Comedy</RouterLink></li>
                <li><RouterLink to="/animation">Animation</RouterLink></li>
                <li><RouterLink to="/action">Action</RouterLink></li>
            </nav>
        </ul>
        </div>

        <div>
            <h1>Site Info</h1>
            <p>Made with ♥️ by Lupa Stance ©2026 Desarrollo de Interfaces</p>
        </div>

        <div class="footer-logo">
            <img src="../assets/logo.svg" alt="logo" class="sv" />
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: solid 1px var(--color-background);
    display: grid;
    grid-template-columns: repeat(3,1fr);
    color: var(--color-background);
    background-color: #4246696e;
    padding: 40px;
    border-radius: 15px;
    font-style: soto sans, sans-serif;
}

* {
    box-sizing: border-box;
}

img {
    max-width: 100px;
    box-shadow: none;
}

.footer-logo {
    align-self: center;
}
</style>