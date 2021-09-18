<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title" :to="item.page" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mdiLogin } from '@mdi/js'; 
import { mdiInformationVariant } from '@mdi/js';
import { mdiClipboardAccountOutline } from '@mdi/js'; 

export default {
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Home", page: "/" },
        { icon: mdiLogin, title: "Iniciar sesión", page: "/login"},
        {
          icon: mdiClipboardAccountOutline,
          title: "Registrarse",
          page: "/signup",
        },
        { icon: "mdi-account", title: "User", page: "/user" },
        { icon: mdiInformationVariant, title: "Acerca de", page: "/about" },
      ],
    };
  },
};
</script>

<style>
</style>