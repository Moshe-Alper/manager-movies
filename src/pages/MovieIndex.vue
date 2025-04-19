<template>
    <h2>Movies</h2>
    <MovieList @remove="removeMovie" v-if="movies" :movies="movies" />
    <h2 v-else>Loading...</h2>
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
    methods: {
        async removeMovie(movieId) {
            await movieService.remove(movieId)

            const idx = this.movie.findIndex(movie => movie._id = movieId)
            this.movies.splice(idx, 1)
        }
    },
    async created() {
        this.movies = await movieService.query()
    }, components: {
        MovieList
    }
}

</script>

<style></style>