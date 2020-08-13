import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    name: 'lipser'
  },
  mutations: {
    setCount (state, count) {
      state.count = count
    }
  },
  actions: {
    setCount (context, count) {
      context.commit('setCount', count)
    }
  },
  modules: {}
})
