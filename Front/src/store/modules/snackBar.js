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
    showSnackBar({ commit }, message = undefined, timeOut = undefined) {
      commit("SET_SNACKBAR", true);
      message != undefined && commit("SET_MESSAGE", message);
      timeOut != undefined && commit("SET_TIMEOUT", timeOut);
      setTimeout(this.hideSnackBar, 2000)
    },
    hideSnackBar({ commit }) {
      commit("SET_SNACKBAR", false);
      commit("SET_MESSAGE", "");
      commit("SET_TIMEOUT", 2000);
    },
  },
};
