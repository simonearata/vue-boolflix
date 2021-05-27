<template>
      <ul>
        <li><h3>{{ film.title }}</h3></li>
        <li><h3>{{ film.original_title }}</h3></li>
        <li><h3>{{ film.original_language }}</h3></li>
        <li><h3>{{ film.vote_average }}</h3></li>
      </ul>
</template>

<script>
export default {
  name: 'Film',
  props: {
    film: Object
  }
}
</script>

<style lang="scss" scoped>

</style>