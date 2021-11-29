<template>
  <v-card
    class="mx-auto"
    max-width="400"
    
  >
    
     <v-card-title>{{cardInfo}}</v-card-title>
      
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