<template>
    <section class="movie-list">
        <ul>
            <li v-for="movie in movies" :key="movie._id">
                <MoviePreview :movie="movie" />
            </li>
        </ul>
    </section>
</template>

<script>
import MoviePreview from './MoviePreview.vue';

export default {
    props: {
        movies: {
            type: Array,
            required: true
        }
    },
    components: {
        MoviePreview,
    }
}
</script>

<style lang="scss">
li {
    list-style: none;
}
</style>