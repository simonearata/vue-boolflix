<template>
  <div class="container">
    <div>
      <h2>{{ titles[type] }}</h2>
      <div class="container box-serie">
        
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
        'movie': 'Film trovati',
        'tv': 'Serie tv trovate',
      },
    }
  }
  

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/MainComp.scss';
</style>