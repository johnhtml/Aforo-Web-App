<template>
  <v-card>
      <v-app-bar
        app
        abosolute
        color="red"
        elevate-on-scroll
        dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Aforo App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="link in webLinks" 
          :key="link.name"
          :to="{name:`${link.name}`}"
          plain>
            {{link.text}}
        </v-btn>
      </v-app-bar>
    </v-card>
</template>

<script>
export default ({
  data: () => ({
    webLinks: [
      {
        name:"Home",
        text:"Home"
      },
      { name:"About",
        text:"Nosotros"
      },
      { name:"Login",
        text:"Log in"
      },
      { name:"Signup",
        text:"Registrarse"
      }
      

    ]
  })
})
</script>

