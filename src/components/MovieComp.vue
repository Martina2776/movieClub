<script setup>
import { ref, onMounted } from 'vue'

const moviesList = ref([])

const fetchMovies = async () => {
  const results = []
  for (const movieId of movies) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=af56a87d&i=${movieId}`)
    const data = await response.json()
    if (data.Response === 'True') {
      results.push(data)
    }
  }
  moviesList.value = results
}

const movies = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0071562', // The Godfather Part II
  'tt0468569', // The Dark Knight
  'tt0050083', // 12 Angry Men
  'tt0108052', // Schindler's List
  'tt0167260', // The Lord of the Rings: The Return of the King
  'tt0110912', // Pulp Fiction
  'tt0060196', // The Good, the Bad and the Ugly
  'tt0137523', // Fight Club
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
  'tt0109830', // Forrest Gump
  'tt1375666', // Inception
  'tt0080684', // Star Wars: Episode V - The Empire Strikes Back
  'tt0167261', // The Lord of the Rings: The Two Towers
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0099685', // Goodfellas
  'tt0047478', // Seven Samurai
  'tt0114369', // Se7en
  'tt0317248', // City of God
  'tt0114709', // Toy Story
  'tt0097814', // Kiki's Delivery Service
  'tt0096283', // My Neighbor Totoro
  'tt0110475', // The Mask
  'tt0085794', // The King of Comedy
]

onMounted(() => {
  fetchMovies()
})
</script>

<template>
  <div>
    <div class="movies">
      <div v-for="movie in moviesList" :key="movie.imdbID" class="portada">
        <img :src="movie.Poster" alt="" class="movie-poster" />
        <div class="movie-info">
          <RouterLink :to="`/movie/${movie.imdbID}`">{{ movie.Title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.movies {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    width: 80%;
    margin: 40px auto;
    gap: 40px;
}

img {
    border-radius: 12px;
    box-shadow: 4px 4px 10px #0e0e0e;
    max-height: 425px
}

* {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #c68e61;
}

.movie-info {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    text-align: center;
    font-family: Noto Sans, sans-serif;
}

</style>
