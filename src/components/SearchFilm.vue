<template>

  <div>
    <input type="text" placeholder="Cerca..."
      v-model.trim="searchText"
    >
    <!-- bottoni -->
    <button class="btn"
      @click.prevent="emitFun('all')"
    >Cerca tutto</button>
    <button class="btn"
      @click.prevent="emitFun('movie')"
    >Cerca film</button>
    <button class="btn"
      @click.prevent="emitFun('tv')"
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

  methods:{
    emitFun(type){
      this.$emit('searching',{text:this.searchText, type:type});
    }
  }

}
</script>

<style lang="scss" scoped>

</style>