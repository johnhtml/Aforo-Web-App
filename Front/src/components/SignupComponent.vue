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
      @click="reset"
    >
      Limpiar
    </v-btn>
    
    <snack-bar v-if="showSnackBar"
      :snackbar="showSnackBar"
      :text="snackBarMessage"
      :color="colorSnackBar"
      :timeout="snackBarTimeout"
    />
  </v-form>
</template>
<script>


import {mapState} from 'vuex'
import { insertNewUser } from '../Services/SignupService'
import SnackBar from '../components/globalComponents/SnackBar.vue'

export default {
    components: {
        SnackBar,


    },
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

      showSnackBar: false,
      snackBarMessage: "",
      colorSnackBar: "",
      snackBarTimeout: 2000,      
    }),

    computed: {
      ...mapState('signup', ['userDocumentTypes']),
      ...mapState('validations', ['emailValidation'])
    },

    methods: {
      resetForm () {
        this.$refs.form.reset()
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
          if (res.data.message == null || res.data.message == undefined){
            this.showUserMessage(`Usuario ${res.data.userName} se ha creado con exito`, "success")
            this.resetForm()
            this.$router.push('/login')
           }
           else{
            this.showUserMessage(`${res.data.message}`, "error")
           }
        })
        .catch((err)=>console.error(err));
      },
      showUserMessage(message, color, timeout = 2000) {
        this.snackBarMessage = message
        this.colorSnackBar = color
        this.showSnackBar = true
        this.timeout = timeout
        setTimeout( () => this.showSnackBar = false, timeout)
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
