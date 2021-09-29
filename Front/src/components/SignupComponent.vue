<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="Nombre"
      :counter="20"
      :rules="nameRules"
      label="Nombres"
      placeholder="Ingrese sus nombres completos"
      required
    ></v-text-field>

    <v-text-field
      v-model="Apellido"
      :counter="30"
      :rules="lastnameRules"
      label="Apellidos"
      placeholder="Ingrese sus apellidos completos"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      placeholder="Ingrese su e-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefono"
      :rules="phoneRules"
      label="Telefono"
      placeholder="Ingrese su numero Celular"
      type number
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Debe seleccionar su tipo de Documento']"
      label="Tipo de documento"
      required
    ></v-select>

    <v-text-field
      v-model="numerodocumento"
      :rules="numdocRules"
      label="Numero de Documento"
      placeholder="Ingrese el numero de su Documento de Identificacion"
      type number
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Debe aceptar el tratamiento de sus datos personales']"
      label="Acepto el tratamiento de mis datos personales"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Enviar
    </v-btn>

    <v-btn
      color="success"
      class="mr-4"
      @click="reset"
    >
      Limpiar
    </v-btn>

  </v-form>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Debe ingresar sus nombres completos',
        v => (v && v.length <= 20) || 'El nombre debe ser inferior a 20 caracteres',
      ],

      lastname: '',
      lastnameRules: [
        v => !!v || 'Debe ingresar sus apellidos completos',
        v => (v && v.length <= 30) || 'El apellido debe ser inferior a 30 caracteres',
      ],

      phone: '',
      phoneRules: [
        v => !!v || 'Debe ingresar su numero de Celular',
        v => !isNaN(v)|| 'Solo puede ingresar numeros',
        v => (v && v.length <= 10) || 'Ingrese su numero de máximo 10 dígitos'
    ],
      
      email: '',
      emailRules: [
        v => !!v || 'Debe ingresar su e-mail',
        v => /.+@.+\..+/.test(v) || 'El e-mail ingresado no es válido',
      ],
      select: null,
      items: [
        'C.C.',
        'C.E.',
        'T.I.',
        'Otro',
      ],

      numdoc: '',
      numdocRules: [
        v => !!v || 'Debe ingresar su numero de Identificacion',
        v => !isNaN(v)|| 'Ingrese su numero sin espacios ni puntos',
        v => (v && v.length <= 20) || 'Ingrese su numero de máximo 10 dígitos'
    ],

      checkbox: false,

      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>>
