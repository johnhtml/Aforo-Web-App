<template>
  <div class="event">
    <h3>
      This is the event {{ $route.params.id }} page by {{ userName }}.
    </h3>

    <v-card class="mx-auto" max-width="1200">
      <v-img
        :src="event.image"
        height="200px"
      ></v-img>

      <v-card-title>{{event.name}}</v-card-title>

      <!-- <v-card-subtitle> 24 Diciembre 2020 </v-card-subtitle> -->

      <v-card-actions>
        <v-btn @click="show = !show" color="orange lighten-2" text>{{event.description}}</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          
        <v-card-text>
          <v-chip-group
            v-model="event.selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="date in event.eventDates" :key="date.id">{{ date.eventDate.toString() | longDate }}</v-chip>
          </v-chip-group>
        </v-card-text>  
        </div>
      </v-expand-transition>

      <!--Falta agregar interfaz para editar el evento nuevo evento (agregar en el atributo 'to')-->
      <v-btn id="editEventButton" color="secondary" dark :to="{ name: 'User', params: { id: event._id } }">
        <v-icon class="pb-1 pr-1">mdi-file-document-multiple</v-icon>Todos los eventos
      </v-btn>
    </v-card>

    
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

import { mdiGreasePencil } from '@mdi/js'; 

export default {
  data: () => ({
    show: false,
    user: JSON.parse(localStorage.getItem("user")),
    mdiGreasePencil: mdiGreasePencil,
    //event:[]
  }),
  computed:{
    events: mapState('userName'),
    ...mapGetters(['getEventById'])
  },
  mounted () {
    this.event = this.getEventById(this.$route.params.id) 
  },
};
</script>

<style>
#editEventButton {
  margin-top: 50px;
  float: inline-end;
}
</style>
