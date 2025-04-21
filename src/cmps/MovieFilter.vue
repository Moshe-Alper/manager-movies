<template>
    <input @input="onSetFilter" v-model="filterBy.txt" placeholder="Search" />
    <input @input="onFilterBy" v-model="filterBy.maxRunTime" type="number" placeholder="Max. running time">

</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                maxRunTime: 0,
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