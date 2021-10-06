<template>
  <v-app>
    <nav-bar
      :brandName="appName" 
      :webLinks="navLinks"/>
    <!-- <drawerNavBar/> -->
    <main-content/>
    <app-footer 
      :brandName="appName" 
      :webLinks="navLinks"
      :categories="categ"/>
  </v-app>
</template>

<script>
import NavBar from './components/appBarComponents/NavBar.vue'
// import DrawerNavBar from './components/appBarComponents/drawerNavBar.vue'
import MainContent from './components/MainContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    // DrawerNavBar,
    MainContent,
    AppFooter

  },

  data: () => ({
    appName:"Aforo App",
    navLinks: [
      {
        name:"Home",
        text:"Home",
        icon:"mdi-home"
      },
      {
        name:"About",
        text:"Nosotros",
        icon:"mdi-clipboard-account-outline"
      },
      {
        name:"Login",
        text:"Log in",
        icon:"mdi-account"
      },
      {
        name:"Signup",
        text:"Registrase",
        icon:"mdi-account-plus"
      }
    ],
    categ:[
      "Cine","Chiquitecas","Conciertos","Carreras", "Fiestas","Misas", "Futbol", 
    ]
  })
};
</script>
