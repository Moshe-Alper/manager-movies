<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue';
import AppFooter from './cmps/AppFooter.vue';
import UserMsg from './cmps/UserMsg.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  }
}
</script>

<template>
  <UserMsg />
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
