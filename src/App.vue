<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue';
import AppFooter from './cmps/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
<main>
  <RouterView />
</main>
<AppFooter />
</template>

<style scoped>
main {
  height: 100vh;
}
</style>
