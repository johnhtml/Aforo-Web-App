<template>
  <v-app>
    <nav-bar
      :brandName="appName" 
      :webLinks="navLinks"/>
    <main-content/>
    <app-footer 
      :brandName="appName" 
      :webLinks="navLinks"
      :categories="categ"/>
  </v-app>
</template>

<script>
import NavBar from './components/appBarComponents/NavBar.vue'
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
        text:"Home",
        icon:"mdi-home"
      },
      {
        name:"About",
        text:"Nosotros",
        icon:"mdi-home"
      },
      {
        name:"Login",
        text:"Log in",
        icon:"mdi-home"
      },
      {
        name:"Signup",
        text:"Registrase",
        icon:"mdi-home"
      },
    ],
    categ:[
      "Empanadas","Hamburguesas","Fiestas de Quince",'Fiestas de cumpleaños',"Conciertos","Carreras de caballos", "Fiestas","Misas"
    ]
  })
};
</script>
