<template>
  <div class="text-center">
    <v-snackbar
      v-model="dsnackbar"
      :timeout="dtimeout"
      :color="dcolor"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="dsnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    props: {
      snackbar: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: "SnackBar sin mensaje",
      },
      timeout: {
        type: Number,
        default: 0,
      },
      color: {
        type: String,
        default: "",
      },
    },
    data(){
      return {
        dsnackbar: false,
        dtext: "",
        dcolor: "",
        dtimeout: 2000
      } 
    },
    methods: {
      loadProps(){
        this.dsnackbar = this.snackbar
        this.dtext = this.text || "SnackBar sin texto"
        this.dcolor = this.color || "Success"
        this.dtimeout = this.dtimeout || 2000
      }
    },
    created() {
      this.loadProps()
    }
  }
</script>