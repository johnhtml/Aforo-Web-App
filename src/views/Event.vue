<template>
  <div class="event">
    <h3>
      This is the event {{ $route.params.id }} page by {{ user.userName }}.
    </h3>

    <v-card class="mx-auto" max-width="1200">
      <v-img
        src="https://cdn.marlonbranding.net/wp-content/uploads/2020/04/eventos-online.jpg"
        height="200px"
      ></v-img>

      <v-card-title>Evento de despedida de año en AQUILES S.A.S.</v-card-title>

      <v-card-subtitle> 24 Diciembre 2020 </v-card-subtitle>

      <v-card-actions>
        <v-btn @click="show = !show" color="orange lighten-2" text> Detalles </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati dolore rem sed veniam quas provident aspernatur, saepe perferendis ut non eius consectetur pariatur corrupti expedita explicabo quisquam quo qui?
          </v-card-text>
        </div>
      </v-expand-transition>

      <!--Falta agregar interfaz para editar el evento nuevo evento (agregar en el atributo 'to')-->
      <v-btn id="editEventButton" color="secondary" dark v-model="user.admin" to="">
        <v-icon>{{ mdiGreasePencil }} </v-icon>Editar evento
      </v-btn>
    </v-card>

    
  </div>
</template>

<script>
import { mdiGreasePencil } from '@mdi/js'; 

export default {
  data: () => ({
    show: false,
    user: JSON.parse(localStorage.getItem("user")),
    mdiGreasePencil: mdiGreasePencil,
  }),
};
</script>

<style>
#editEventButton {
  margin-top: 50px;
  float: inline-end;
}
</style>
