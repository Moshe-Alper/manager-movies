<template>
    <header>
        <MovieFilter @filter="onFilter" />
        <RouterLink to="/movie/edit"><button>Add a movie</button>
        </RouterLink>
    </header>
    <MovieList @remove="removeMovie" v-if="movies" :movies="movies" />
    <h2 v-else>Loading...</h2>
    <!-- <pre class="debug">{{ movies }}</pre> -->
</template>

<script>
import MovieList from '@/cmps/MovieList.vue';
import MovieFilter from '@/cmps/MovieFilter.vue';
import { movieService } from '@/services/movie.service';
import { debounce } from '@/services/util.service';

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
        },
        onFilter(filterBy) {
            this.debouncedLoadMovies(filterBy)
        },
        async loadMovies(filterBy = {}) {
            this.movies = await movieService.query(filterBy)
        },
    },
    async created() {
        this.debouncedLoadMovies = debounce((this.loadMovies))
        this.loadMovies()
    },
    components: {
        MovieList,
        MovieFilter,
    }
}

</script>

<style></style>