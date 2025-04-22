<template>
  <footer>
    <p>Coffee Rights Movie Manager</p>
    <h2>{{ counter }}</h2>

    <button @click="onIncrement">+ 1</button>

  </footer>
</template>

<script>
export default {
  methods: {
    onIncrement() {
      this.$store.commit({ type: 'increment'})
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  }
}
</script>

<style>
footer {
    display: grid;
    justify-content: center;
    background-color: lightgrey;
    padding-block: 1rem;
}
</style>