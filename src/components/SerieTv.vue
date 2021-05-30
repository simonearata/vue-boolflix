<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">
      </div>
      <div class="flip-card-back">
        <ul>
          <li><h4>{{  serie.name }}</h4></li>
          <li
            v-if="serie.name != serie.original_name"
          ><h4>{{  serie.original_name }}</h4></li>
          <li><h4><flag :iso="serie.original_language === 'en' ? 'gb' : serie.original_language"/></h4></li>
          <li>
            <h4 v-for="index in 5" :key="index">
              <i
                v-if="index <= Math.ceil((serie.vote_average * 5) / 10)"
                class="fas fa-star"
              ></i>  
              <i
                v-else
                class="far fa-star"
              ></i>  
            </h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
        

<script>
export default {
  name: 'SerieTv',
  props: {
    serie: Object
  },

  methods:{
    returnNum(){
      
      return Math.ceil((this.film.vote_average * 5) / 10)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/serietv';
</style>