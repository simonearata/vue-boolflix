<template>
  <div class="container">
    
    <!-- con $emit chiamo la funzione searching -->
    <Search-Film 
      @searching="searching"
    />

    <div>
      <h2
        v-if="this.results.tv.length != 0"
      >Serie tv trovate</h2>
      <div class="d-flex flex-wrap container box-serie">
        <serie-tv
          v-for="serie in results.tv"
          :key="serie.id"
          :serie="serie"
        />
      </div>
      <h2
        v-if="this.results.tv.length != 0"
      >Film trovati</h2>
      <div class="d-flex flex-wrap container box-movie">
        <movie 
          v-for="film in results.movie"
          :key="film.id"
          :film="film"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchFilm from './SearchFilm.vue'
import Movie from './Movie.vue'
import SerieTv from './SerieTv.vue'

export default {
  name: 'MainComp',
  components:{
    SearchFilm,
    Movie,
    SerieTv
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
@import '../assets/styles/general';
</style>