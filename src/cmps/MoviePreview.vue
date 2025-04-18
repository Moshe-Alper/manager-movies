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
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 10px;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }
}
</style>