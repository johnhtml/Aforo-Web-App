<template>
  <v-form>
    <v-text-field
      label="Email"
      :prepend-icon="mdiAt"
      :rules="rulesEmail"
      hide-details="auto"
      v-model="email"
    ></v-text-field>

    <v-text-field
      label="Contraseña"
      :prepend-icon="mdiLock"
      :rules="rulesPassword"
      hide-details="auto"
      v-model="password"
      type="password"
    ></v-text-field>

    <v-spacer></v-spacer>
    <div>
      <v-btn id="boton" color="primary" @click="loginFunction()">Login</v-btn>
      <v-btn id="boton" color="gray" :to="{name:'Signup'}">Registrarse</v-btn>
    </div>
  </v-form>
</template>

<script>
import { mdiLock } from '@mdi/js';
import { mdiAt } from '@mdi/js'; 

export default {
  data() {
    return {
      email: "",
      password: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      mdiLock: mdiLock,
      mdiAt: mdiAt,
      rulesEmail: [
        (value) => !!value || "Requerido.",
        (value) =>
          (value && value.length <= 50) || "Máximo 50 caracteres.",
        (value) => (value && this.reg.test(value)) || "Correo no válido."
      ],

      rulesPassword: [
        (value) => !!value || "Requerido.",
        (value) =>
          (value && value.length >= 10) || "Mínimo 10 caracteres.",
        (value) =>
          (value && value.length <= 50) || "Máximo 50 caracteres.",
      ]
    };
  },
  methods: {
    loginFunction() {
      console.log("print email " + this.email);
    },
  },
};
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>>
