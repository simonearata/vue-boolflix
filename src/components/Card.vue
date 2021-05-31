<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="'https://image.tmdb.org/t/p/w342' + card.poster_path" alt="">
      </div>
      <div class="flip-card-back">
        <ul>
          <li><h4>{{ card.title || card.name }}</h4></li>
          <li
            v-if="card.title != card.original_title"
          ><h4>{{ card.original_title || card.original_name }}</h4></li>
          <li><h4><flag :iso="card.original_language === 'en' ? 'gb' : card.original_language"/></h4></li>
          <li>
            <h4 v-for="index in 5" :key="index">
              <i
                v-if="index <= Math.ceil((card.vote_average * 5) / 10)"
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
  name: 'Card',

  props: {
    card: Object
  },
  
  methods:{
    returnNum(){
      
      return Math.ceil((this.card.vote_average * 5) / 10)
    }
  }
}
</script>

<style>
@import '../assets/styles/card.scss';
</style>