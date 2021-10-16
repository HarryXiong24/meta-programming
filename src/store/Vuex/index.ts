import { createStore } from "vuex";

export default createStore({
  state: {
    one: "null",
  },
  mutations: {
    _mutation_one(state, data) {
      state.one = data;
    },
  },
  actions: {
    _action_one({ commit }, data) {
      commit("_mutation_one", data);
    }
  },
  modules: {},
});
