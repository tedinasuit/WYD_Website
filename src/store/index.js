// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    backgroundImage: '../assets/Hippie-kleurrijk.png' // Initial background image
  },
  mutations: {
    setBackgroundImage(state, image) {
      state.backgroundImage = image;
    }
  },
  actions: {
    changeBackgroundImage({ commit }, image) {
      commit('setBackgroundImage', image);
    }
  }
});
