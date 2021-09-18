<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar app absolute color="pink darken-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-spacer>_</v-spacer>
    <v-footer absolute inset app dark padless bottom>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "./components/MenuComponent";
import Footer from "./components/FooterComponent";

export default {
  components: {
    Menu,
    Footer
  },
  data: () => ({
    drawer: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
