<template>
  <v-row>
    <v-col sm="12" md="6" lg="4" v-for="event in events" :key="event._id" >
      <v-card :loading="event.loading" class="mx-auto my-12" max-width="400" min-height="550">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="200" :src="event.image"></v-img>

        <v-card-title>{{ event.name }}</v-card-title>

        <v-card-text>

          <!-- <div class="my-2 text-subtitle-1">$ {{ event.price.$numberDecimal | formatNumber}}</div> -->

          <div>
            {{ event.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Fechas disponibles</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="event.selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="date in event.eventDates" :key="date.id">{{ date.eventDate.toString() | longDate }}</v-chip>
          </v-chip-group>
        </v-card-text>  

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve(evento) " :to="{ name: 'EventById', params: { id: event._id } }">
            Ver
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data: () => ({
  }),
  computed:{
    ...mapState(['events'])
  },
  methods: {
    reserve(evento) {
      evento.loading = true;

      setTimeout(() => (evento.loading = false), 2000);
    },
    
    ...mapActions(['getAllEventsAction'])
  },
  mounted () {
    this.getAllEventsAction()
  },
};
</script>
