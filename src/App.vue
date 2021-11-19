<template>
  <v-app>
    <Systembar/>
    <Appbar/>
    <Navigationdrawer/>
    <v-main >
      <Content/>
    </v-main>

    <Footer/>
    <Bottom/>
  </v-app>
  
</template>

<script>
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import Systembar from './components/Systembar';
import Appbar from './components/Appbar';
import Navigationdrawer from './components/Navigationdrawer';
import Content from './components/Content';

export default {
  name: 'App',

  components: {
    Footer,
    Bottom,
    Systembar,
    Appbar,
    Navigationdrawer,
    Content
  },

  data: () => ({
    //
  }),
};
</script>
