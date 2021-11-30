<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    
      <v-card-title>{{cardInfo.Nome}}</v-card-title>
    


    <v-card-text class="text--primary">
      <div>{{cardInfo.Celular}}</div>

      <div>{{cardInfo.Email}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Ligar
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Enviar Mensagem
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  export default {
      props:['cardid','cardInfo'],
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>