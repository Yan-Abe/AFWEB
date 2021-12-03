<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://www.serro.mg.gov.br/fotos/b4d80b98de6ea9bb73c2ee183bad5ad2.jpg"
    >
    </v-img>
    <v-card-title>{{cardInfo.title}}</v-card-title>
    <v-card-subtitle> <div>{{cardInfo.description}}</div></v-card-subtitle>
    <v-card-text class="text--primary">

      <div>{{cardInfo.Info}}</div>
      <v-card-actions>

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