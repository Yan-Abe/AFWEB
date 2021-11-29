<template>
  <div>
      <v-row>
      <v-col
        v-for="{data,i} in myCards"
        :key="i"
        cols="16"
        sm="12"
        md="3"
        xs="2"
      >
      {{i}}
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
    return{ cardss: this.$store.state.cards
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
