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
import { showErrorMsg, showSuccessMsg } from '@/services/event-bus.service';

export default {
    methods: {
        async removeMovie(movieId) {
            try {
                this.$store.dispatch({ type: 'removeMovie', movieId})
                showSuccessMsg('Movie Deleted')

            } catch (err) {
               showErrorMsg('Failed to delete movie')
            }
        },
        onFilter(filterBy) {
            this.$store.commit({ type: 'setFilter', filterBy})
            this.debouncedLoadMovies(filterBy)
        },
        async loadMovies() {
            await this.$store.dispatch({ type: 'loadMovies'})
            showSuccessMsg('Movies loaded!')
        },
    },
    async created() {
        this.debouncedLoadMovies = debounce((this.loadMovies))
        this.loadMovies()
    },
    computed: {
        movies() { return this.$store.getters.movies } 
    },
    components: {
        MovieList,
        MovieFilter,
    }
}

</script>

<style></style>