import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';

// Modules
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  strict: true,
  modules: {
    users,
  },
});
