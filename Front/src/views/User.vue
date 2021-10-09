<template>
  <div class="user">
    <h5>Hola {{ userName }}</h5>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col v-for="event in events" :key="event.id" cols="12">
          <v-card :img="event.image">
            <v-list two-line>
              <v-list-item :to="{ name: 'EventById', params: { id: event._id } }">
                <!-- <v-list-item-avatar  color="grey darken-1"> </v-list-item-avatar> -->
                
                <v-avatar class="mr-4">
                  <img
                    :src="event.image"
                    rounded='0'
                  >
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> {{ event.name }}</v-list-item-title>

                  <v-list-item-subtitle>
                    {{event.description}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <!--Falta agregar interfaz para agregar nuevo evento (agregar en el atributo 'to')-->
      <v-btn id="addEventButton" color="secondary" dark v-model="user.admin" fab to="">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  data: () => ({
    user: {
      admin: true,
    },
  }),
  computed:{
    ...mapState(['userName','events'])
  },
  methods:{
    // ...mapActions(['getAllEventsAction']),
    // validarEventos: () => {
    //   if (!this.events.length){
    //     'getAllEventsAction'
    //   }
    // }
  },
  mounted() {
    this.validarEventos()
  },
};
</script>

<style>
#addEventButton {
  margin-top: 50px;
  float: inline-end;
}
</style>
