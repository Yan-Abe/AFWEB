<template>
  <div>
      <v-row>
      <v-col
         v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        sm="6"
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
  name: 'Contatos',
  data(){
    return{ 
      titleView: this.$store.state.title

    }
  },
  computed:{
    myCards(){
      return this.$store.state.cards
    }
  },
  components: {
    Card,
  },
}
</script>
