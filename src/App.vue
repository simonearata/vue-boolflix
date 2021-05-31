<template>
  <div id="app">
    
    <header-comp  
      @searching="searching"
      @popolar="popolar"
    />

    <main-comp 
      v-if="results.movie.length > 0" type='movie' :list="results.movie"
    />

    <main-comp 
      v-if="results.tv.length > 0" type='tv' :list="results.tv"
    />

  </div>
</template>

<script>
import axios from 'axios'
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'


export default {
  name: 'App',
  components: {
    MainComp,
    HeaderComp
    
  },
  data(){
    return{
      apiURL_2: 'https://api.themoviedb.org/3/',
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiKey: '953d71539729d361f94a4214aeaf03a5',
      // creao un oggetto con le due ricerche
      results:{
        'movie': [],
        'tv': []
      },
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
    },
    
    popular(type){
      if(type === 'movie'){
        this.popularMovie();
      }else{
        this.searchFilm(obj.text, obj.type);
      }
      console.log(obj)
    },

    popularMovie(){
      axios.get('https://api.themoviedb.org/3/movie/popular',{
        params:{
          api_key: this.apiKey,
          language: 'it-IT'
        }
      })
      .then(res => {
        this.results[type] = res.data.results;
      })
      .catch(err => {
        console.log(err);
      })
    },


    popularTv(){
      axios.get('https://api.themoviedb.org/3/tv/popular',{
        params:{
          api_key: this.apiKey,
          language: 'it-IT'
        }
      })
      .then(res => {
        this.results[type] = res.data.results;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },


}
</script>

<style lang="scss">
@import './assets/styles/general.scss';
</style>
