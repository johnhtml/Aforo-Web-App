<template>
  <v-footer
    app
    absolute
    color="error"
    padless
  >
    <v-row
      absolute
      justify="center"
      no-gutters>
      <v-col
        cols="12"
        md="3"
        height="100%"
        class="py-4 text-center white--text" 
        align-self="center"
        >
          {{ new Date().getFullYear() }} — <strong>{{brandName}}</strong>
      </v-col>
      <v-col
        cols="12"
        md="9"
        align="center"
        class=".d-none"
        v-if="$vuetify.breakpoint.mdAndUp">
        <v-card color="transparent">
          <v-card-title class="text-center white--text" >Categorias</v-card-title>
          <v-divider color="white"/>
          <v-chip v-for="cat in categories" :key="cat"
          class="ma-2"
          outlined
          pill
          color="white">
          {{cat}}
        </v-chip>
        </v-card>
        
      </v-col>
      <v-col
        cols="12"
        align="right"
        align-self="center"
        v-if="$vuetify.breakpoint.smAndDown">
          <v-btn
            v-for="link in webLinks"
            :key="link.name"
            :to="{name:`${link.name}`}"
            plain
            dark
            class="my-2 d-flex d-md-inline-flex"
          >
            
            <v-icon class="pb-1 pr-1">{{link.icon}}</v-icon>
            {{ link.text }}
          </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default ({
  props: {
    brandName:{
      type:String,
      default:''},
    webLinks:{
      type:Array,
      default:() => { [] }
    },
    categories:{
      type:Array,
      default:() => { [] }
    }
  },
  data: () => ({
  })
})
</script>