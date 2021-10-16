<template>
<v-card  class="mx-auto mt-5">
  <v-form 
    v-model="valid"
    ref="form"
     class="pa-5">
    <v-icon class="mr-2 pb-2 d-inline-flex" large v-if="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
    <h2 class="d-inline-flex">{{appName}} - Inicio de sesión.</h2>
  <!-- nombre del evento -->
    <v-text-field v-model="name"
      type="text"
      required
      :counter="30"
      label="Nombre del evento"
      placeholder="Ingrese el nombre del evento"
      :rules="[
        v => !! v || '*Requerido: Ingrese el nombre del evento.',
        v => (v && v.length >= 1 && v.length <= 30) || 'El nombre del evento debe tener entre 1 y 30 caracteres.',
      ]"
    ></v-text-field>
    
  <!-- descripción del evento -->
    <v-text-field v-model="description"
      type="text"
      :counter="100"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      label="Descripción"
      placeholder="Ingrese una breve descripción del evento"
      :rules="[
        v => (v && v.length <= 100) || 'La descripción del evento debe tener máximo 100 caracteres.',
      ]"
    ></v-text-field>

    <!-- precio  -->
    <v-text-field v-model="precio"
      type="number"
      label="Precio de la entrada"
      placeholder="Ingrese el precio del evento"
    ></v-text-field>

      <template>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-date-picker
          v-model="dates"
          multiple
        ></v-date-picker>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              small-chips
              label="Multiple picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker
            v-model="dates"
            multiple
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </template>
    <v-divider class="my-4"></v-divider>
    <div class="mt-5 d-flex">
      <v-btn class="mr-4"  color="success" :to="{name:'Signup'}">Registrarse</v-btn>
      <v-btn :disabled="!valid" color="info" @click="loginFunction()">Login</v-btn>
    </div>
  </v-form>
</v-card>
</template>

<script>
  export default {
    data: () => ({
      dates: ['2018-09-15', '2018-09-20'],
      menu: false,
    }),
  }
</script>