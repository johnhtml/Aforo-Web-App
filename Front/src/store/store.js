import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as globals from "@/store/modules/globals.js";
import * as signup from "@/store/modules/signup.js";
import * as event from "@/store/modules/event.js";

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    user,
    globals,
    signup,
    event
  }
});