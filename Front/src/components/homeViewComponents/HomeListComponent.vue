<template>
  <v-row>
    <v-col sm="12" md="6" lg="4" v-for="event in events" :key="event._id" >
      <v-card :loading="event.loading" class="mx-auto my-12" max-width="400" min-height="500">
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

        <v-card-title>Fechas disponibles - Precio {{event.price | toCurrency}}</v-card-title>

          <v-combobox
            class="container"
            v-model="model"
            :items="event.eventDates"
            item-text="eventDate"
            item-value="eventDate"
            return-object
            :search-input.sync="search"
            hide-selected
            label="Fechas seleccionadas"
            multiple
            persistent-hint
            small-chips
          >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data: () => ({
    items: [],
      model: [],
      search: null,
    scrollInvoked: 0,
  }),
  computed:{
    ...mapState('event', ['events'])
  },
  watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
  },
  methods: {
    reserve(evento) {
      evento.loading = true;

      setTimeout(() => (evento.loading = false), 2000);
    },
    
    ...mapActions('event', ['getAllEventsAction']),
    onScroll () {
        this.scrollInvoked++
      },
      
  },
  mounted () {
    this.getAllEventsAction()
  },
};
</script>
