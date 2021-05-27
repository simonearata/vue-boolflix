<template>

  <div>
    <input type="text" placeholder="Cerca..."
      v-model.trim="searchText"
    >
    <button class="btn"
      @click.prevent="$emit('ricerca',{text:searchText, type:'all'})"
    >Cerca tutto</button>
    <button class="btn"
      @click.prevent="$emit('ricerca',{text:searchText, type:'films'})"
    >Cerca film</button>
    <button class="btn"
      @click.prevent="$emit('ricerca',{text:searchText, type:'tv'})"
    >Cerca serie tv</button>
  </div>
  
</template>

<script>
export default {
  name: 'SearchFilm',

  data(){
    return{
      searchText: '',
    }
  },

}
</script>

<style lang="scss" scoped>

</style>