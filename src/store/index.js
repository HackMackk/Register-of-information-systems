import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test:['One', 'two', 'Three', 'fore', 'five', 'six', 'seven', 'eight', 'Nine', 'ten'],
    test1:['one1', 'two1', 'three1', 'fore1', 'five1', 'six1', 'seven1', 'eight1', 'nine1', 'ten'],
  },
  mutations: {
  },
  actions: {
    giveTest({dispatch, commit}, action){      
      return this.state.test
    }
  },
  modules: {
  }
})
