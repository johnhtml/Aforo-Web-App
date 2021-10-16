export default {
  namespaced: true,

  state: {
    appName: "Aforo App",
    user: "",
    userName: "",
    userFullName: "",
    navLinks: [
      {
        name: "Home",
        text: "Home",
        icon: "mdi-home",
        show: true,
        authenticated: false,
      },
      // },
      // {
      //   name: "About",
      //   text: "Nosotros",
      //   icon: "mdi-clipboard-account-outline",
      //   show: true,
      //   authenticated: false,
      // },
      {
        name: "NewEvent",
        text: "newevent",
        icon: "mdi-clipboard-account-outline",
        show: false,
        authenticated: true,
      },
      {
        name: "User",
        text: "Perfil",
        icon: "mdi-account",
        show: false,
        authenticated: true,
      },
      {
        name: "Login",
        text: "Iniciar sesión",
        icon: "mdi-login-variant",
        show: true,
        authenticated: false,
      },
      {
        name: "Logout",
        text: "Cerrar sesión",
        icon: "mdi-logout-variant",
        show: false,
        authenticated: false,
      },
    ],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user.user;
      state.userName = user.name;
      state.userFullName = user.fullName;
    },
    SET_LOGIN_OUT(state, Login) {
      state.navLinks[state.navLinks.length - 3].show = Login;
      state.navLinks[state.navLinks.length - 2].show = !Login;
      state.navLinks[state.navLinks.length - 1].show = Login;
    },
  },
  actions: {
    saveUser({ commit }, user) {
      commit("SET_USER", {
        user: user.userName,
        name: user.name,
        fullNmae: `${user.name} ${user.lastName}`,
      });
      sessionStorage.setItem("user", user.userName);
    },
    changeLoginMenuButtons({ commit, state }, index = 0) {
      let login = false;
      if (index === state.navLinks.length - 1) {
        sessionStorage.removeItem("user");
        state.navLinks[state.navLinks.length - 3].text = "Perfil";
      } else if (sessionStorage.getItem("user")) {
        login = true;
        state.navLinks[state.navLinks.length - 3].text = state.user;
      }
      commit("SET_LOGIN_OUT", login);
    },
    routeAuthorization({ state }, index) {
      let Auth = false;
      if (!sessionStorage.getItem("user")) {
        if (!state.navLinks[index].authenticated) {
          Auth = true;
        }
      } else {
        Auth = true;
      }
      return Auth;
    },
  },
};
