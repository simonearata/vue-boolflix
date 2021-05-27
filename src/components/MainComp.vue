<template>
  <div class="container">
    
    <Search-Film 
      @ricerca="searching"
    />

    <div class="box-film d-flex flex-wrap">
      <film 
        v-for="film in results.films"
        :key="film.id"
        :film="film"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Film from './Film'
import SearchFilm from './SearchFilm.vue'

export default {
  name: 'MainComp',
  components:{
    Film,
    SearchFilm
    
  },
  
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '953d71539729d361f94a4214aeaf03a5',
      query: '',
      results:{
        'films': [],
        'tv': []
      }
    }
  },

  methods: {

    searching(obj){
      this.resetResults();
      if(obj.type === 'all'){
        this.searchFilm(obj.text, 'films');
        this.searchFilm(obj.text, 'tv');
      }else{
        this.searchFilm(obj.text, obj.type);
      }
      console.log(obj)
    },

    resetResults(){
      this.results.films = [];
      this.results.tv = [];
    },

    searchFilm(searchText, type){

      axios.get(this.apiURL+type,{
        params:{
          api_key: this.apiKey,
          query: searchText,
          language: 'it-IT'
        }
      })
      .then(resp => {
        this.results[type] = resp.data.results;
        console.log(this.results.film);
        console.log(this.results.tv);
      })
      .catch(err =>{
        console.log(err)
      })
      this.query = ""
    }
  },

}
</script>

<style lang="scss" scoped>
  ul{
    background-color: burlywood;
    margin: 10px;
  }
</style>