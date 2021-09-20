<template>
  <div class="user">
    <h3>This is the User page</h3>
    <h5>Welcome {{ user.userName }}</h5>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col v-for="event in events" :key="event.title" cols="12">
          <v-card>
            <v-subheader>{{ title }}</v-subheader>

            <v-list two-line>
              <v-list-item :to="{ name: 'Event', params: { id: event.id } }">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evento {{ event.id }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <!--Falta agregar interfaz para agregar nuevo evento (agregar en el atributo 'to')-->
      <v-btn id="addEventButton" color="secondary" dark v-model="user.admin" fab to="">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Eventos",
    events: [
      {
        id: 1,
        title: "Fiesta de despedida de año en Aquiles S.A.S.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similiqu.",
      },
      {
        id: 2,
        title: "Fiesta de despedida de año en les S.A.S.",
        desc: "Nihil repellendus distinctio similiqu. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      },
    ],
    user: {
      userName: "Carlitos",
      admin: true,
    },
  }),
};
</script>

<style>
#addEventButton {
  margin-top: 50px;
  float: inline-end;
}
</style>