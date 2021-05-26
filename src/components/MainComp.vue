<template>
  <div class="container">
    <div>
      <input type="text" placeholder="Cerca film"
        v-model.trim="query"
        @keyup.enter='searchFilm'
      >
      <button class="btn"
        @click="searchFilm"
      >Cerca</button>
    </div>
    <div class="box-film d-flex flex-wrap">
      <ul
        v-for="film in films"
        :key="film.id"
      >
        <li><h3>{{ film.title }}</h3></li>
        <li><h3>{{ film.original_title }}</h3></li>
        <li><h3>{{ film.original_language }}</h3></li>
        <li><h3>{{ film.vote_average }}</h3></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainComp',
  
  data(){
    return{
      apiURL: 'https://api.themoviedb.org/3/search/movie',
      apiKey: '953d71539729d361f94a4214aeaf03a5',
      query: '',
      films: []
    }
  },

  methods: {
    searchFilm(){

      axios.get(this.apiURL,{
        params:{
          api_key: this.apiKey,
          query: this.query,
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