<template>
  <v-app>
    <nav-bar></nav-bar>
    <main-content></main-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainContent from './components/MainContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    MainContent,
    AppFooter

  },

  data: () => ({
    //
  }),
};
</script>
