<template>
  <v-form>
    <v-text-field
      label="Nombre"
      prepend-icon="mdi-account"
      :rules="rulesName"
      hide-details="auto"
      v-model="name"
    ></v-text-field>

    <div>
      <v-btn id="boton" color="primary" v-on:click="signupFunction()">Registrarse</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",

      rulesName: [
        (value) => !!value || "Requerido.",
        (value) =>
          (value && value.length >= 5) ||
          "Se deben ingresar mínimo 5 caracteres",
        (value) =>
          (value && value.length <= 40) || "Máximo 40 caracteres",
      ],
    };
  },
  methods: {
    signupFunction() {
      console.log("print name " + this.name);
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
