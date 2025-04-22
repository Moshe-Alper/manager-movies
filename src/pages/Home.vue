<template>
  <section class="home">
    <h1>Home</h1>
    <h2>{{ counter }}</h2>
    <button @click="onIncrement">+ 1</button>
  </section>
</template>

<script>
export default {
  methods: {
    onIncrement() {
      this.$store.commit({ type: 'increment' })
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>