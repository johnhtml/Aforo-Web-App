<template>
  <v-app>
    <nav-bar/>
    <main-content/>
    
    <snack-bar v-if="snackBar"
      :snackbar="snackBar"
      :text="message"
      :timeout="2000"
    />
    <app-footer/>
  </v-app>
</template>


<script>
import NavBar from './components/appBarComponents/NavBar.vue'
// import DrawerNavBar from './components/appBarComponents/drawerNavBar.vue'
import MainContent from './components/MainContent.vue'
import AppFooter from './components/AppFooter.vue'
import SnackBar from './components/globalComponents/SnackBar.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    NavBar,
    // DrawerNavBar,
    MainContent,
    AppFooter,
    SnackBar

  },

  data: () => ({
    showSnackBar: false
  }),
  computed: {
    ...mapState('snackBar',['snackBar', 'message'])
  }
};
</script>
