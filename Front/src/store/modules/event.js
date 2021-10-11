import { getAllEvents } from "@/Services/EventsService"

export default {
  namespaced = true,
  
  state = {
    events: [],
    eventCategories: [
      "Cine",
      "Chiquitecas",
      "Conciertos",
      "Carreras",
      "Fiestas",
      "Misas",
      "Futbol",
    ]
  },

  mutations: {
    fillEvents(state, events) {
      state.events = events;
    }
  },

  actions: {
    async getAllEventsAction({ commit }) {
      // if (getters.eventsCount == 0) {
      try {
        const res = await getAllEvents();
        commit("fillEvents", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  },

  getters: {
    getEventById: (state) => (id) => {
      return Object.values(state.events).filter((event) => event._id === id)[0];
    },
    eventsCount: (state) => {
      state.events.length;
    }
  }

}
