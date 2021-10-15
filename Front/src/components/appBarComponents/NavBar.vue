<template>
  <v-card>
      <v-app-bar
        app
        abosolute
        color="error"
        elevate-on-scroll
        dark>
          <!-- <v-app-bar-nav-icon class="pl-6" v-if="$vuetify.breakpoint.smAndDown" @click="shawDrawer"></v-app-bar-nav-icon> -->
          <v-app-bar-nav-icon class="pl-6" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
          <v-icon class="ml-5 mr-2 pb-2" large v-if="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
          <v-toolbar-title>{{appName}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <div v-for="(link, index) in navLinks" 
              :key="link.name">
              <v-btn v-if="link.show"
                  :to="{name:`${link.name}`}"
                  @click="changeLoginMenuButtons(index)"
                  plain>
                <v-icon class="pb-1 pr-1">{{link.icon}}</v-icon>
                  {{link.text}}
              </v-btn>
            
            </div>
          </template>
      </v-app-bar>
    </v-card>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default ({
  data: () => ({
    // drawer: false
  }),
  computed:{
    ...mapState('globals', ['appName','navLinks'])
  },
  methods: {
    ...mapActions('globals',['changeLoginMenuButtons'])
  }

})
</script>

