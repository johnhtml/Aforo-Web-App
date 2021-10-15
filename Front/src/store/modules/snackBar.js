export default {
  namespaced: true,

  state: {
    snackBar: false,
    message: "soy un snack bar",
    timeOut: 2000,
  },
  mutations: {
    SET_SNACKBAR(state, showSnackBar) {
      state.snackBar = showSnackBar;
    },
    SET_MESSAGE(state, snackBarMessage) {
      state.message = snackBarMessage;
    },
    SET_TIMEOUT(state, timeOut) {
      state.timeOut = timeOut;
    },
  },
  actions: {
    showSnackBar({ commit }, message = undefined) {
      commit("SET_MESSAGE", message == undefined || message == null ? "mensaje de prueba" : message)
      commit("SET_SNACKBAR", true);
      setTimeout(function () { commit("SET_SNACKBAR", false) }, 2000);
    },
    hideSnackBar({ commit }) {
      commit("SET_SNACKBAR", false);
      commit("SET_MESSAGE", "");
      commit("SET_TIMEOUT", 2000);
    },
  },
};
