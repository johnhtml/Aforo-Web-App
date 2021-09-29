<template>
  <div class="home">
  
    <CarouselComponent></CarouselComponent>
    <HomeContentComponent></HomeContentComponent>
  </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';
import HomeContentComponent from '../components/HomeContentComponent.vue';

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
