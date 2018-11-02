import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalTime: 0
}
const mutations = {
  setTotalTime (state, t) {
    state.totalTime = t
  },
  reduce (state) {
    return state.totalTime--
  }
}
export default new Vuex.Store({
  state, mutations
})
