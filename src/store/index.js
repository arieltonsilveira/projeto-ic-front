import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import user from './state/user.state'
Vue.use(Vuex)
const vuexPersist = new VuexPersist({
    key: 'projeto-comercial',
    storage: window.localStorage
})
export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  mutations: {},
  modules: {
    user:user
  }
})
