<template>
    <article class="movie-preview">
        <img 
            :src="movie.posterUrl" 
            alt="Movie poster" 
            onerror="this.src='../../default.png'">
            
        <h1>{{movie.title}}</h1>
        <p>directed by: {{movie.director}}</p>
        <p>{{movie.runningTime}} min.</p>
        <span v-for="(actor, index) in movie.actors" :key="index">{{actor}}, </span>
        <span>More...</span>
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
    justify-content: center;
    h1 {
        font-size: 1.5em;
        font-weight: bold;
    }

    img {
        width: 150px;
        height: auto;
        border-radius: 5px;
    }
}
</style>