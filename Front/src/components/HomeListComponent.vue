<template>
  <v-row>
    <ul>
      <li v-for="event in events" :key="event._id">
        {{event}}
      </li>
    </ul>
    <v-col sm="12" md="6" lg="4" v-for="event in events" :key="event._id">
      <v-card :loading="event.loading" class="mx-auto my-12" max-width="374">
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
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • {{ event.price.$numberDecimal }}</div>

          <div>
            {{ event.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Selecciona una fecha</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="event.selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="date in event.eventDates" :key="date">{{ date.eventDate }}</v-chip>
          </v-chip-group>
        </v-card-text>  

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve(evento)">
            Reservar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getAllEvents } from "../Services/EventsService"

export default {
  data: () => ({
    events: [],
  }),
  mounted () {
    getAllEvents()
    .then(res => {
      this.events = res.data
    })
    .catch((err)=>console.error(err))
  },
  methods: {
    reserve(evento) {
      evento.loading = true;

      setTimeout(() => (evento.loading = false), 2000);
    },
  },
};
</script>
