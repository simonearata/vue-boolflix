<template>
  <div class="container">
    <h4>Continua a guardare:</h4>
    <div 
      class="box_container"
      v-for="(film, index) in films"
      :key="index"
    >
      <div>
        <img :src="film.img" alt="">
        <div class="bar-time"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComp',

  data(){
    return{
      films: [

        {
          title: 'Il signore degli anelli',
          img:require('../assets/img/anelli.jpg')
        },
        {
          title: 'Star Wars',
          img:require('../assets/img/star.jpg')
        },

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/videocomp.scss';
</style>