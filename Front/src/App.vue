<template>
  <v-app>
    <nav-bar 
      :brandName="appName" 
      :webLinks="navLinks"/>
    <main-content/>
    <app-footer 
      :brandName="appName" 
      :webLinks="navLinks"/>
  </v-app>
</template>

<script>
import NavBar from './components/menuComponents/NavBar.vue'
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
    appName:"Aforo App",
    navLinks: [
      {
        name:"Home",
        text:"Home"
      },
      {
        name:"About",
        text:"Nosotros"
      },
      {
        name:"Login",
        text:"Log in"
      },
      {
        name:"Signup",
        text:"Registrase"
      },
    ]
  }),
};
</script>
