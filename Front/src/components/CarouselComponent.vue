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
    <v-carousel-item v-for="slide in slides" :key="slide.image">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img height="100%" :src="slide.image">
            <div class="d-flex justify-center text-h2 mt-10">  {{ slide.titulo }} </div>
          </v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      
      slides: [
        {
          titulo:"Concierto para Programadores",
          image:
          "https://cdn.marlonbranding.net/wp-content/uploads/2020/04/eventos-online.jpg"
        },
        {
          titulo:"Musical niños",
          image:
          "https://www.etapainfantil.com/wp-content/uploads/2015/12/Instrumentos-musicales-infantiles-e1451302057587.jpg.webp"
        },
        {
          titulo:"Car Audio Taiwan",
          image:
          "https://cnwebsite.blob.core.windows.net/files/2019/06/62192Car-Audio-Chica-Pionner-Ofc.jpg"
        }
      ],
    };
  },
};
</script>