<template>
  <div class="home">
    <h1>This is a home page</h1>
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
