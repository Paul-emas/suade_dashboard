// import https from '@/api';
import data from '../data.js';

const { users } = data;

const state = {
  isLoading: false,
  users: [],
};

const getters = {
  users: (state) => state.users,
  loading: (state) => state.isLoading,
};

const actions = {
  fetchAllUsers({ commit }) {
    commit('setLoading', true);
    setTimeout(() => {
      commit('getAllUsers', users);
      commit('setLoading', false);
    }, 2000);
  },
};

const mutations = {
  setLoading: (state, payload) => (state.isLoading = payload),
  getAllUsers: (state, payload) => (state.users = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
