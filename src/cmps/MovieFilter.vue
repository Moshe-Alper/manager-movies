<template>
    <input @input="onSetFilter" v-model="filterBy.txt" placeholder="Search" />
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        onSetFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
input {
    justify-self: start;
}
</style>