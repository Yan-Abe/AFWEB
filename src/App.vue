<template>

  <v-app>
    <v-div>
    <v-navigation-drawer app  
    v-model ="drawer" 
    dark>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Yan Abe</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
    <v-system-bar app>
    <Systembar/>
    </v-system-bar>
  <v-app-bar app
    dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>WEBMOTOS</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
        <v-icon>mdi-home-city</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-group-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <v-container>
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
export default {
  name: 'App',
  components: {
    Footer,
    Bottom,
    Systembar
  },
  data: () => ({
    drawer: null,
    items: [
          { title: 'Início', icon: 'mdi-home-city', to: '/'},
          { title: 'Perfil', icon: 'mdi-account', to: '/perfil'},
          { title: 'Contato', icon: 'mdi-account-group-outline', to: '/contato'},
          { title: 'Foto', icon: 'mdi-image', to: '/foto'},
        ],
  }),
};
</script>