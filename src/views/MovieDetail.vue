<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

const route = useRoute()
const API_KEY = 'af56a87d'
const movie = ref(null)

const fetchMovie = async () => {
  const movieId = route.params.id
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
  const data = await response.json()
  if (data.Response === 'True') {
    movie.value = data
  }
}

onMounted(() => {
  fetchMovie()
})
</script>

<template>
  <HeaderComp />

  <div v-if="movie">
    <h1>{{ movie.Title }}</h1>
    <div class="movieInfo">
        <div>
            <img :src="movie.Poster" :alt="movie.Title" />
       </div>
        <div>
            <p><strong>🗓️</strong> {{ movie.Year }}</p>
            <p><strong>🎟️</strong> {{ movie.Released }}</p>
            <p><strong>🎭</strong> {{ movie.Genre }}</p>
            <p><strong>🧙</strong> {{ movie.Director }}</p>
            <p><strong>📓</strong> {{ movie.Plot }}</p>
            <p><strong>⭐</strong> {{ movie.imdbRating }} / 10 </p>
        </div>
</div>
  </div>

  <FooterComp />
</template>

<style scoped>
h1 {
    text-align: center;
    font-weight: bold;
    font-family: sans-serif;
}

.movieInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 60%;
    margin: 0 auto;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

img {
    border-radius: 12px;
    box-shadow: 4px 4px 10px #0e0e0e;
}

</style>
