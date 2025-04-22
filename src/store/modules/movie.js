import { movieService } from "@/services/movie.service"

export default {
    state() {
        return {
            movies: [],
            filterBy: {},
        }
    },
    mutations: {
        setMovies(state, { movies }) {
            state.movies = movies
        },
        removeMovie(state, { movieId }) {
            const idx = state.movie.findIndex(movie => movie._id = movieId)
            state.movies.splice(idx, 1)  
        },
        setFilter(state, {filterBy} ) {
            state.filterBy = { ...filterBy}
        }
    },
    actions: {
        async loadMovies({ commit, state }) {
            const movies = await movieService.query(state.filterBy)
            commit({ type: 'setMovies', movies })
        },
        async removeMovie({ commit }, { movieId }) {
            await movieService.remove(movieId)
            commit({ type: 'removeMovie', movieId })
        },
    },
    getters: {
        movies(state) { return state.movies }
    }
}
