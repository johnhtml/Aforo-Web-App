<template>
  <v-main app>
    <v-container class="overflow-y-auto" id="main">
        <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>

// import HomeContentComponent from './HomeContentComponent.vue';
export default {
  components: {
    // HomeContentComponent
  },

  data: () => ({
    //
  }),
};
</script>
