<template>
  <v-card>
      <v-app-bar
        app
        abosolute
        color="error"
        elevate-on-scroll
        dark>
          <v-app-bar-nav-icon large></v-app-bar-nav-icon>
            <v-icon class="mr-2 pb-2">mdi-account-group</v-icon>
            <v-toolbar-title large>{{brandName}}</v-toolbar-title>
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
  props: {
    brandName:{
      type:String,
      default:""
    },
    webLinks:{
      type:Array,
      default:() => { [] }
    }
  },
  data: () => ({
  })
})
</script>

