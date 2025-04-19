<template>
    <article class="movie-preview">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.releaseYear }}</p>
        <img :src="movie.posterUrl" :alt="`Poster for ${movie.title}`">
    </article>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.movie-preview {

    h1 {
        font-size: 1.5em;
        font-weight: bold;
    }

    img {
        width: 80px;
        height: 80px;
        height: auto;
        border-radius: 5px;
    }
}
</style>