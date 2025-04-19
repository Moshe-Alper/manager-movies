<template>
  <h1>Edit</h1>
  <form @submit.prevent="onSave" v-if="movie" class="movie-edit">
    <input v-model="movie.title" type="text">
    <div class="actions">
      <RouterLink to="/movie"><button>Cancel</button></RouterLink>
      <button type="submit">Save</button>
    </div>
  </form>

</template>

<script>
import { movieService } from '@/services/movie.service'
export default {
  data() {
    return {
      movie: null,
    }
  },
  methods: {
    async onSave() {
      await movieService.save(this.movie)
      this.$router.push('/movie')
    }
  },
  async created() {
    const { id: movieId } = this.$route.params
    this.movie = await movieService.get(movieId)
  }

}
</script>

<style lang="scss">
.movie-edit {
  display: grid;
  justify-items: start;
  gap: 10px;
  padding: 10px;
  background-color: lightblue;

  .actions {
    justify-self: end;
  }
}
</style>