<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="userName"
      :counter="20"
      :rules="userNameRules"
      label="Usuario"
      placeholder="Ingrese su usuario"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :counter="20"
      :rules="passwordRules"
      label="Contraseña"
      placeholder="Ingrese su contraseña"
      required
    ></v-text-field>
    <v-text-field
      v-model="confirmPassword"
      :counter="20"
      :rules="confirmPasswordRules"
      label="Confirmar contraseña"
      placeholder="Confirme su contraseña"
      required
    ></v-text-field>
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Nombres"
      placeholder="Ingrese sus nombres completos"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :counter="30"
      :rules="lastNameRules"
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
      v-model="phone"
      :rules="phoneRules"
      label="Telefono"
      placeholder="Ingrese su numero Celular"
      type number
      required
    ></v-text-field>

    <v-select
      v-model="docType"
      :items="userDocumentTypes"
      :rules="[v => !!v || 'Debe seleccionar su tipo de Documento']"
      label="Tipo de documento"
      required
    ></v-select>

    <v-text-field
      v-model="numDoc"
      :rules="numDocRules"
      label="Numero de Documento"
      placeholder="Ingrese el numero de su Documento de Identificacion"
      type number
      required
    ></v-text-field>

    <v-checkbox
      v-model="personalTerms"
      :rules="[v => !!v || 'Debe aceptar el tratamiento de sus datos personales']"
      label="Acepto el tratamiento de mis datos personales"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="createNewUser"
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


import {mapState} from 'vuex'
import { insertNewUser } from '../Services/SignupService'

export default {
    data: () => ({
      valid: true,
      userName: '',
      userNameRules: [
        v => !!v || 'Debe ingresar sus nombres completos',
        v => (v && v.length <= 20) || 'El nombre debe ser inferior a 20 caracteres',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Debe ingresar sus nombres completos',
        v => (v && v.length <= 20) || 'El nombre debe ser inferior a 20 caracteres',
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Debe ingresar sus nombres completos',
        v => (v && v.length <= 20) || 'El nombre debe ser inferior a 20 caracteres',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Debe ingresar sus nombres completos',
        v => (v && v.length <= 20) || 'El nombre debe ser inferior a 20 caracteres',
      ],

      lastName: '',
      lastNameRules: [
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
      docType: null,

      numDoc: '',
      numDocRules: [
        v => !!v || 'Debe ingresar su numero de Identificacion',
        v => !isNaN(v)|| 'Ingrese su numero sin espacios ni puntos',
        v => (v && v.length <= 20) || 'Ingrese su numero de máximo 10 dígitos'
    ],

      personalTerms: false,

      
    }),

    computed: {
      ...mapState('signup', ['userDocumentTypes'])
    },

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
      createNewUser(){
        const newUser = {
          userName: this.userName,
          password: this.password,
          name: this.name,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          documentType: this.docType,
          documentNumber: this.numDoc,
          acceptedPersonalTerms: this.personalTerms
        }
        insertNewUser(newUser)
        .then((res)=>{
          console.log(`Usuario ${res.data.userName} se ha creado con exito`)
        })
        .catch((err)=>console.error(err));

      }
    },
  }
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>>
