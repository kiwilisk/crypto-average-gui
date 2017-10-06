import Vue from 'vue';
import Vuex from 'vuex';
import { SET_ASSET, REMOVE_ASSET } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    asset: null,
  },
  mutations: {
    [SET_ASSET](state, newAsset) {
      state.asset = newAsset;
    },
    [REMOVE_ASSET](state) {
      state.asset = null;
    },
  },
});
