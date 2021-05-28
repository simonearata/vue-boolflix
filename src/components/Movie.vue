<template>
      <ul>
        <li><h4>{{ film.title || film.name }}</h4></li>
        <li><h4>{{ film.original_title || film.original_name}}</h4></li>
        <li><h4><flag :iso="film.original_language === 'en' ? 'gb' : film.original_language"/></h4></li>
        <li><h4>{{ film.vote_average || film.vote_average}}</h4></li>
      </ul>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    film: Object
  }
}
</script>

<style lang="scss" scoped>

</style>