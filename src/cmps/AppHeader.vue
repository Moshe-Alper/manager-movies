<template>
  <header>
    <h1>Movie Manager</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movie">Movies</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;

    h1 {
        margin: 0;
    }

    nav {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;

        a {
            text-decoration: none;
            color: #007bff;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

</style>