import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// eslint-disable-next-line new-cap
export default new Vuex.Store({
    state,
    mutations,
    getters
})
