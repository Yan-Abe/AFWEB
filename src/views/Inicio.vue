<template>
  <div>
    <h1> {{title}} </h1>
      <v-row>
      <v-col
         v-for="(data,i) in events"
        :key="i"
        cols="12"
        sm="8"
        md="4"
        xs="2"
      >
         <Card :cardid ="i" :cardInfo="data"></Card>
      </v-col>
    </v-row>
  

    </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'Inicio',
  data(){
    return{ 
      titleView: this.$store.state.title,
    }
  },
  computed:{
    myCards(){
      return this.$store.state.cards
    },
    title(){
      return this.$store.getters.bigTitle
    },
    events(){
      return this.$store.state.events
    }
  },
  components: {
    Card,
  }, 
  async created(){
    this.$store.dispatch("fetchEvents")
   }
}
</script>