import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    patientId: 0
  },
  mutations: {
    SET_USERDATA(state, payload) {
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", JSON.stringify(payload.token))
      state.user = payload.user;
      state.token = payload.token;
    },
    LOGOUT(state) {
      localStorage.clear();
      state.user = null;
      state.token = null;
    }
  },
  actions: {

  }
})
