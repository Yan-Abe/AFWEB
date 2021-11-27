<template>

  <v-app>
    <v-div>
    <v-navigation-drawer app>
    <Navigationdrawer/> 
  </v-navigation-drawer>
    <v-system-bar app>
    <Systembar/>
    </v-system-bar>
  <v-app-bar app>
    <Appbar/>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <v-content app>
    <Facens/>
  </v-content>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

<v-bottom-navigation app>
    <Bottom/>
</v-bottom-navigation>
  <v-footer app>
    <Footer/>
  </v-footer>
  </v-div>
  </v-app>
  
</template>

<script>
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import Systembar from './components/Systembar';
import Appbar from './components/Appbar';
import Navigationdrawer from './components/Navigationdrawer';
import Facens from './components/Facens';

export default {
  name: 'App',

  components: {
    Footer,
    Bottom,
    Systembar,
    Appbar,
    Navigationdrawer,
    Facens
  },

  data: () => ({
    //
  }),
};
</script>
