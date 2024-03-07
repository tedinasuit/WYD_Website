import { createStore } from 'vuex';

export default createStore({
  state: {
    backgroundImage: '@/assets/Hippie-kleurrijk.png', // Default background image
  },
  mutations: {
    setBackground(state, imageUrl) {
      state.backgroundImage = imageUrl;
    },
  },
  actions: {
    setBackground({ commit }, imageUrl) {
      commit('setBackground', imageUrl);
    },
  },
  modules: {},
});
