import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getAllEvents } from "./Services/EventsService";

export default new Vuex.Store({
  state: {
    appName: "Aforo App 2021",
    navLinks: [
      {
        name: "Home",
        text: "Home",
        icon: "mdi-home",
      },
      {
        name: "About",
        text: "Nosotros",
        icon: "mdi-clipboard-account-outline",
      },
      {
        name: "Login",
        text: "Log in",
        icon: "mdi-account",
      },
      {
        name: "Signup",
        text: "Registrase",
        icon: "mdi-account-plus",
      },
    ],
    events: [],
    eventCategories: [
      "Cine",
      "Chiquitecas",
      "Conciertos",
      "Carreras",
      "Fiestas",
      "Misas",
      "Futbol",
    ],
  },
  mutations: {
    fillEvents (state, events) {
      state.events = events
    },
  },
  actions: {
    async getAllEventsAction({ commit }) {
      try {
        const res = await getAllEvents()
        commit("fillEvents", res.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
});