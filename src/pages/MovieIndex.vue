<template>
    <h2>Movies</h2>
    <MovieList v-if="movies" :movies="movies" />
    <h2>Loading...</h2>
    <!-- <pre class="debug">{{ movies }}</pre> -->
</template>

<script>
import MovieList from '@/cmps/MovieList.vue';
import { movieService } from '@/services/movie.service';

export default {
    data() {
        return {
            movies: null,
        }
    },
    async created() {
        this.movies = await movieService.query()
    },
    components: {
        MovieList
    }
}

</script>

<style></style>