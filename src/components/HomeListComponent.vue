<template>
  <v-row>
    <v-col sm="12" md="6" lg="4" v-for="evento in events" :key="evento.id">
      <v-card :loading="evento.loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="200" :src="evento.image"></v-img>

        <v-card-title>{{ evento.name }}</v-card-title>

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

          <div class="my-4 text-subtitle-1">$ • {{ evento.price }}</div>

          <div>
            {{ evento.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Selecciona una fecha</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="evento.selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="date in evento.dates" :key="date">{{ date }}</v-chip>
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
export default {
  data: () => ({
    events: [
      {
        id: 1,
        name: "Despedida de fin de año en Aquiles S.A.S.",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: "Gratis",
        image:
          "https://cdn.marlonbranding.net/wp-content/uploads/2020/04/eventos-online.jpg",
        dates: ["31 octubre 2021", "31 Noviembre 2021"],
        selection: 1,
        loading: false,
      },
      {
        id: 2,
        name: "Despedida de fin de año en Aquiles S.A.S.",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: "Gratis",
        image:
          "https://blog.sirena.app/hs-fs/hubfs/eventos_negocios-1.jpg?width=1050&name=eventos_negocios-1.jpg",
        dates: ["31 octubre 2021", "31 Noviembre 2021"],
        selection: 1,
        loading: false,
      },
      {
        id: 3,
        name: "Feria de exposición tecnológica",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: "Gratis",
        image:
          "https://www.marketingdirecto.com/wp-content/uploads/2019/07/EVENTOPLUS-EVENTODAY-300x174.jpg",
        dates: ["31 octubre 2021", "31 Noviembre 2021"],
        selection: 1,
        loading: false,
      },
    ],
  }),

  methods: {
    reserve(evento) {
      evento.loading = true;

      setTimeout(() => (evento.loading = false), 2000);
    },
  },
};
</script>
