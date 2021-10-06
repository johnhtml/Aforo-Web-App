<template>
  <v-card>
      <v-app-bar
        app
        abosolute
        color="error"
        elevate-on-scroll
        dark>
          <v-app-bar-nav-icon class="pl-6" v-if="$vuetify.breakpoint.smAndDown" @click="shawDrawer"></v-app-bar-nav-icon>
          <v-icon class="ml-5 mr-2 pb-2" large v-if="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
          <v-toolbar-title>{{appName}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn 
              v-for="link in navLinks" 
              :key="link.name"
              :to="{name:`${link.name}`}"
              plain>
              <v-icon class="pb-1 pr-1">{{link.icon}}</v-icon>
                {{link.text}}
            </v-btn>
          </template>
      </v-app-bar>
    </v-card>
</template>

<script>

import {mapState} from 'vuex'

export default ({
  data: () => ({
    drawer: false
  }),
  computed:{
    ...mapState(['appName','navLinks'])
  },
  methods: {
    showDrawer(){
      this.showDrawer = !this.showDrawer
    }
  }

})
</script>

