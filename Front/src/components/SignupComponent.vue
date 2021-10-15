<template>
  <v-form
    ref="form"
    v-model="valid"
  >

  <!-- Usuario -->
    <v-text-field v-model="userName"
      required
      :counter="20"
      label="Usuario"
      placeholder="Ingrese su usuario"
      :rules="[
        v => !! v || '*Requerido: Ingrese su nombre de usuario.',
        v => (v && v.length >= 5 && v.length <= 20) || 'Su nombre de usuario debe tener entre 5 y 20 caracteres.',
      ]"
    ></v-text-field>

  <!-- Contraseña -->
    <v-text-field v-model="password"
      required
      type="password"
      :counter="0"
      label="Contraseña"
      placeholder="Ingrese su contraseña"
      :rules="[
        v => !!v || '*Requerido: Ingrese su contraseña.',
        v => (v && v.length >= 8) || 'Su contraseña debe tener mínimo 8 caracteres.',
      ]"
    ></v-text-field>

  <!-- Confirmar contraseña -->
    <v-text-field v-model="confirmPassword"
      required
      type="password"
      :counter="0 "
      label="Confirmar contraseña"
      placeholder="Confirme su contraseña"
      :rules="[
        v => !!v || '*Requerido: Ingrese nuevamente su contraseña.',
        v => (v === this.password) || 'Las contraseñas ingresadas no son iguales, verifiquelas.',
      ]"
    ></v-text-field>

  <!-- Nombres -->
    <v-text-field v-model="name"
      required
      type="text"
      :counter="30"
      label="Nombres"
      placeholder="Ingrese sus nombres completos"
      :rules="[
        v => !!v || '*Requerido: Ingrese sus nombres completos.',
        v => (v && v.length <= 30) || 'No puede exceder 30 caracteres.',
      ]"
    ></v-text-field>

  <!-- Apellidos -->
    <v-text-field v-model="lastName"
      required
      :counter="30"
      label="Apellidos"
      placeholder="Ingrese sus apellidos completos"
      :rules="[
        v => !!v || '*Requerido: Ingrese sus apellidos completos.',
        v => (v && v.length <= 30) || 'No puede exceder 30 caracteres.',
      ]"
    ></v-text-field>

  <!-- email -->
    <v-text-field v-model="email"
      required
      :counter="0"
      label="E-mail"
      placeholder="Ingrese su e-mail"
      :rules="[ 
        v => !!v || '*Requerido: Ingrese su correo electrónico.',
        v => (v && v.length <= 100) || 'No puede exceder 100 caracteres.',
        v => (v && this.emailFormat.test(v)) || 'Ingrese un correo valido.'
      ]"
    ></v-text-field>

  <!-- Teléfono -->
    <v-text-field v-model="phone"
      required
      type="text"
      :counter="10"
      label="Número de contacto"
      placeholder="Ingrese su número de contacto"
      :rules="[
        v => !!v || '*Requerido: Ingrese su número de contacto.',
        v => !isNaN(v)|| 'Solo puede ingresar numeros.',
        v => (v && v.length == 10) || 'El número de contacto debe ser de 10 dígitos.'
    ]"
    ></v-text-field>

  <!-- Tipo de documento -->
    <v-select v-model="docType"
      required
      :items="userDocumentTypes"
      label="Tipo de documento"
      :rules="[v => !!v || '*Requerido: Debe seleccionar el tipo de su documento de identificación.']"
    ></v-select>

  <!-- Número de documento -->
    <v-text-field v-model="numDoc"
      required
      label="Documento de identificación"
      placeholder="Ingrese su documento de identificación"
      :rules="[
        v => !!v || '*Requerido: Ingrese su documento de identificación.',
        v => (v && v.length <= 20) || 'No puede exceder 20 caracteres.'
    ]"
    ></v-text-field>

    <v-checkbox v-model="personalTerms"
      required
      type="checkbox"
      label="Acepto el tratamiento de mis datos personales."
      :rules="[v => !!v || '*Requerido: Debe aceptar el tratamiento de datos personales para continuar con el registro.']"
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
      @click="resetForm()"
    >
      Cancelar
    </v-btn>
    
  </v-form>
</template>
<script>


import {mapState, mapActions} from 'vuex'
import { insertNewUser } from '../Services/SignupService'

var bcrypt = require('../../node_modules/bcryptjs/index');
var salt = bcrypt.genSaltSync(10);

export default {
    data: () => ({
      valid: false,
      userName: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastName: '',
      phone: '',
      email: '',
      emailFormat: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      docType: null,
      numDoc: '',
      personalTerms: false,

    }),

    computed: {
      ...mapState('signup', ['userDocumentTypes']),
      ...mapState('validations', ['emailValidation'])
    },

    methods: {
      resetForm () {
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
        this.$router.push('/login')
      },
      createNewUser(){
        const newUser = {
          userName: this.userName,
          password: bcrypt.hashSync(this.password, salt),
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
          if (res.data.message == null || res.data.message == undefined){
            this.showSnackBar(`El usuario '${res.data.userName}' se ha creado con exito`)
            console.log(`El usuario '${res.data.userName}' se ha creado con exito`)
            this.resetForm()
            this.$router.push('/login')
           }
           else{
            this.showSnackBar(`${res.data.message}`)
            
            console.log(`${res.data.message}`)
           }
        })
        .catch((err)=>console.error(err));
      },
      ...mapActions('snackBar', ['showSnackBar'])
    },
  }
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>>
