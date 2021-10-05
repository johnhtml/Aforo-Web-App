<template>
  <div class="home">
  
    <CarouselComponent :eventList="events"></CarouselComponent>
    <HomeListComponent :eventList="events"></HomeListComponent>
  </div>
</template>

<script>

import { getAllEvents } from "../Services/EventsService"
import CarouselComponent from '../components/homeViewComponents/CarouselComponent.vue';
import HomeListComponent from "../components/homeViewComponents/HomeListComponent.vue";
export default {
  components: {
    CarouselComponent,
    HomeListComponent
  },
  data() {
    return {
      name: "Home",
      events: [],
    };
  },
  mounted () {
    getAllEvents()
    .then(res => {
      this.events = res.data
    })
    .catch((err)=>console.error(err))
  },
};
</script>
