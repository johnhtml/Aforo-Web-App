import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getAllEvents } from "./Services/EventsService";

export default new Vuex.Store({
  state: {
    appName: "Aforo App 5000",
    userName: "Julito el marranito",
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
        name: "User",
        text: "Perfil",
        icon: "mdi-account",
      },
      {
        name: "User",
        text: "Ricardo",
        icon: "mdi-account",
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
    userDocumentTypes: ["CC", "CE", "TI", "Pasaporte"],
  },
  mutations: {
    fillEvents(state, events) {
      state.events = events;
    },
  },
  actions: {
    async getAllEventsAction({ commit, getters }) {
      if (getters.eventsCount == 0) {
        try {
          const res = await getAllEvents();
          commit("fillEvents", res.data);
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  getters: {
    getEventById: (state) => (id) => {
      return Object.values(state.events).filter((event) => event._id === id)[0];
    },
    eventsCount: (state) => {state.events.length}

    // getEventById: (state) => (id) => {
    //   return state.events.find((event) => event._id === id);
    // },
  },
});