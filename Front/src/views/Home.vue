<template>
  <div class="home">
  
    <CarouselComponent></CarouselComponent>
    <HomeContentComponent></HomeContentComponent>
  </div>
</template>

<script>
import CarouselComponent from '../components/homeViewComponents/CarouselComponent.vue';
import HomeContentComponent from '../components/homeViewComponents/HomeContentComponent.vue';

export default {
  components: {
    CarouselComponent,
    HomeContentComponent
  },
  data() {
    return {
      name: "Home",
    };
  },
};
</script>
