<template>
  <div v-if="movie" class="movie-details">
    <div class="poster-container">
      <img :src="movie.posterUrl || 'https://placehold.co/300x450'" :alt="`Poster for ${movie.title}`" class="movie-poster" />
      <div class="poster-title" v-if="movie.title">{{ movie.title }}</div>
    </div>
    <h2>{{ movie.title }}</h2>
    <p><strong>Director:</strong> {{ movie.director }}</p>
    <p><strong>Release Year:</strong> {{ movie.releaseYear }}</p>
    <p><strong>Running Time:</strong> {{ movie.runningTime }} minutes</p>
    <p><strong>Genre:</strong> {{ movie.genre }}</p>
    <p><strong>Actors:</strong></p>
    <ul>
      <li v-for="actor in movie.actors" :key="actor">{{ actor }}</li>
    </ul>
    <RouterLink to="/movie"><button>Back</button></RouterLink>
  </div>
</template>

<script>
import { movieService } from '@/services/movie.service'
export default {
  data() {
    return {
      movie: null,
    }
  },
  async created() {
    const { id: movieId } = this.$route.params
    this.movie = await movieService.get(movieId)
  }

}
</script>

<style lang="scss">
.movie-details {
  display: grid;
  padding: 10px;
  background-color: lightblue;

  a { 
    justify-self: end;
  }

  strong {
    font-weight: 700;
  }
}

</style>