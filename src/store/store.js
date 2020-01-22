import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutation"
import actions from "./action"
import getters from "./getter"

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
