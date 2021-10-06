<template>
  <div class="home">
    <CarouselComponent></CarouselComponent>
    <HomeListComponent></HomeListComponent>
  </div>
</template>

<script>


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
    };
  }
};
</script>
