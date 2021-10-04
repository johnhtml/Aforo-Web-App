<template>
  <v-footer
    color="error"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in webLinks"
        :key="link.name"
        :to="{name:`${link.name}`}"
        plain
        dark
        class="my-2"
      >
        {{ link.text }}
      </v-btn>
      <v-col
        class="error lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>{{brandName}}</strong>
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
    }
  },
  data: () => ({
  })
})
</script>