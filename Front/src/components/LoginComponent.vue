<template>
<v-card  class="mx-auto mt-5">
  <v-form 
    v-model="valid"
    ref="form"
     class="pa-5">
    <v-icon class="mr-2 pb-2 d-inline-flex" large v-if="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
    <h2 class="d-inline-flex">{{appName}} - Inicio de sesión.</h2>
  <!-- Usuario -->
    <v-text-field v-model="user"
      required
      :counter="20"
      prepend-icon="mdi-account"
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
      :type="showPassword ? 'text' : 'password'"
      :counter="0"
      prepend-icon="mdi-form-textbox-password"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      label="Contraseña"
      placeholder="Ingrese su contraseña"
      :rules="[
        v => !!v || '*Requerido: Ingrese su contraseña.',
        v => (v && v.length >= 8) || 'Su contraseña debe tener mínimo 8 caracteres.',
      ]"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
    <v-divider class="my-4"></v-divider>
    <div class="mt-5 d-flex">
      <v-btn class="mr-4"  color="success" :to="{name:'Signup'}">Registrarse</v-btn>
      <v-btn :disabled="!valid" color="info" @click="loginFunction()">Login</v-btn>
    </div>
  </v-form>
</v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validateUser } from '../Services/LoginService' 


export default {
  data() {
    return {
      valid:false,
      user: "",
      password: "",
      showPassword:false
    };
  },
  methods: {
    loginFunction() {
      const user = {
        userName: this.user,
        password: this.password
      }
        validateUser(user)
        .then((res)=>{
          console.log(res.status)
          if (res.status === 200) {
            const user = res.data;
            this.saveUser(user)
            this.showSnackBar(`Hola ${this.userName}, Bienvenido!.`)
            this.changeLoginMenuButtons()
            this.resetForm();
          }
        })
        .catch(()=>this.showSnackBar('La combinación usuario y contraseña son incorrectas'))
    },
    ...mapActions('globals', ['saveUser','changeLoginMenuButtons']),
    ...mapActions('snackBar', ['showSnackBar']),
    resetForm () {
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
        this.$router.push('/user')
      },
  },
  computed:{
    ...mapState('globals', ['appName','userName'])
  },
}
</script>

<style scoped>
#boton {
  margin-top: 50px;
  float: inline-end;
}
</style>>
