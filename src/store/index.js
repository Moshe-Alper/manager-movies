import { createStore } from 'vuex'
import movie from './modules/movie'

const options = {
    strict: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state,) {
            state.counter++
        }
    },
    getters: {
        counter(state) {
            return state.counter
        }
    },
    modules: {
        movie
    }
}

const store = createStore(options)
export default store