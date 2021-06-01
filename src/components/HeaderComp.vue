<template>
  <header>
    <div class="header_nav_left">
      <div class="box_logo">
        <h1>BOOFLIX</h1>
      </div>
      <div class="box_button">
        <button
          @click.prevent="emitReset()"
        >Home</button>
        <button
          @click.prevent="emitPopular('tv')"
        >Serie TV</button>
        <button
          @click.prevent="emitPopular('movie')"
        >Film</button>
      </div>
    </div>

    <div class="header_nav_right">
      <button class="fontaw" href=""
        @click="myActive"
      ><i class="fas fa-search"></i></button>
      <div 
        class="box_button"
        v-if="isHidden"
      >
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  data(){
    return{
      searchText: '',
      isHidden: false,
    }
  },

  methods:{
    emitFun(type){
      this.$emit('searching',{text:this.searchText, type:type});
    },
    
    emitPopular(type){
      this.$emit('popular', type);
    },

    myActive(){
      this.isHidden = !this.isHidden
    },

    emitReset(){
      this.$emit('resetResults')
    }
  }
}
</script>

<style lang="scss" scopeds>
@import '../assets/styles/headercomp';
</style>