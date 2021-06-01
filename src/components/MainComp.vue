<template>
  <div class="container">
    <div>
      <h2>{{ titles[type] }}</h2>
      <div class="box-all">
        <card
          v-for="card in list"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
        

<script>
import Card from './Card.vue'



export default {
  name: 'MainComp',

  components:{
    Card
  },

  props:{
    type: String,
    list: Array
  },

  data(){
    return{
      titles:{
        'movie': 'Film',
        'tv': 'Serie tv',
      },
    }
  }
  

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/MainComp.scss';
</style>