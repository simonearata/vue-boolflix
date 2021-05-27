<template>

  <div>
    <input type="text" placeholder="Cerca film"
      v-model.trim="searchText"
      @keyup.enter='search'
    >
    <button class="btn"
      @click.prevent="search"
    >Cerca</button>
  </div>
  
</template>

<script>
export default {
  name: 'SearchFilm',

  data(){
    return{
      searchText: ''
    }
  },

  methods:{
    search(){
      this.$emit('ricerca', this.searchText);
    }
  }


}
</script>

<style lang="scss" scoped>

</style>