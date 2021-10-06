<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <template v-slot:prev="{ on, attrs }">
      <v-btn color="pink darken-2" v-bind="attrs" v-on="on"
        >Previous slide</v-btn
      >
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn color="pink darken-2" v-bind="attrs" v-on="on">Next slide</v-btn>
    </template>
    <v-carousel-item v-for="event in events" :key="event._id">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img height="100%" :src="event.image">
            <div class="d-flex justify-center text-h2 mt-10">  {{ event.name }} </div>
          </v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import {mapState} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed:{
    ...mapState(['events'])
  }
};
</script>