<template>
  <div v-if="movie" class="movie-details">
    <h2>{{ movie.title }}</h2>
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
}

</style>