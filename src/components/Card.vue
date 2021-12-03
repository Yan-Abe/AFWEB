<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      v-bind:src="cardInfo.Foto"
    >
    </v-img>
    <v-card-title>{{cardInfo.Nome}}</v-card-title>
    <v-card-text class="text--primary">
      <div>{{cardInfo.Preco}}</div>

      <div>{{cardInfo.Info}}</div>
      <v-card-actions>
      <v-btn
        color="red"
        text
      >
        Comprar
      </v-btn>

    </v-card-actions>
    </v-card-text>

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