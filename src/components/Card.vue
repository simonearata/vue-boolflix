<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="no_image" v-if="card.poster_path === null" src="#" :alt="card.title || card.name">
        <img :src="'https://image.tmdb.org/t/p/w342' + card.poster_path" alt="">
      </div>
      <div class="flip-card-back">
        <ul>
          <li>
            <p>
              <strong>Titolo:</strong>
              {{ card.title || card.name }}
            </p>
          </li>
          <li
            v-if="card.title != card.original_title || card.name != card.original_name"
          >
            <p>
              <strong>Titolo originale:</strong>
              {{ card.original_title || card.original_name }}
            </p>
          </li>
          <li><p><flag :iso="card.original_language === 'en' ? 'gb' : card.original_language"/></p></li>
          <li>
            <strong>Voto: </strong>
            <div class="stars">

              <div class="empty">
                <div class="inner">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>

              <div class="solid" :style="`width:${6.7*card.vote_average}px`">
                <div class="inner">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div> 
          </li>
          <li>
            <strong>Overview:</strong>
            {{ card.overview  || card.Overview }}
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

<style  lang="scss" scoped>
@import '../assets/styles/card.scss';
</style>