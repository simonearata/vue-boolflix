<template>
  <div class="container">
    
    <Search-Film 
      @ricerca="searchFilm"
    />

    <div class="box-film d-flex flex-wrap">
      <Film 
        v-for="film in films"
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
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: '953d71539729d361f94a4214aeaf03a5',
      query: '',
      films: []
    }
  },

  methods: {
    searchFilm(searchText){

      axios.get(this.apiURL,{
        params:{
          api_key: this.apiKey,
          query: searchText,
          language: 'it-IT'
        }
      })
      .then(resp => {
        this.films = resp.data.results;
        console.log(this.films);
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