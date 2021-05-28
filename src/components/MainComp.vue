<template>
  <div class="container">
    
    <!-- con $emit chiamo la funzione searching -->
    <Search-Film 
      @searching="searching"
    />

    <div class="box-film d-flex flex-wrap">

      <movie 
        v-for="film in results[type]"
        :key="film.id"
        :film="film"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchFilm from './SearchFilm.vue'
import Movie from './Movie.vue'

export default {
  name: 'MainComp',
  components:{
    SearchFilm,
    Movie
  },
  
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '953d71539729d361f94a4214aeaf03a5',
      // creao un oggetto con le due ricerche
      results:{
        'movie': [],
        'tv': []
      },
      titles:{
        'movie': 'Film Trovati',
        'tv': 'Serie tv trovate'
      }
    }
  },

  methods: {

    // funzione
    searching(obj){

      // prima resetto le ricerche
      this.resetResults();
      // se ricerco sia film che serie faccio due chiamate
      if(obj.type === 'all'){
        this.searchFilm(obj.text, 'movie');
        this.searchFilm(obj.text, 'tv');
      }else{
        this.searchFilm(obj.text, obj.type);
      }
      console.log(obj)
    },

    resetResults(){
      this.results.movie = [];
      this.results.tv = [];
    },

    // funzione per chiamare axios
    searchFilm(query, type){
     
      axios.get(this.apiURL+type,{
        params:{
          api_key: this.apiKey,
          query: query,
          language: 'it-IT'
        }
      })
      .then(res => {
        this.results[type] = res.data.results;
        console.log(this.results.movie);
        console.log(this.results.tv);
      })
      .catch(err =>{
        console.log(err)
      })
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