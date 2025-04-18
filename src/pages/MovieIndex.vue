<template>
  <h2>Movies</h2>
  <pre>{{ movies }}</pre>
</template>

<script>
import { movieService } from '@/services/movie.service';

export default {
    data() {
        return {
            movies: [],
        }
    },
    async created() {
        this.movies = await movieService.query()
    }
}

</script>

<style>

</style>