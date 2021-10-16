import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import globals from "./modules/globals";
import signup from "./modules/signup";
import event from "./modules/event";
import snackBar from "./modules/snackBar";
import validations from "./modules/validations";

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    user,
    globals,
    signup,
    event,
    snackBar,
    validations
  }
});