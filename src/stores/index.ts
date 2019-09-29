import Vue from 'vue'
import Vuex from 'vuex'
import { State } from '@/stores/storeTypes'
Vue.use(Vuex)

export default (initData: any) => {
  const state: State = require('./stab.json')
  return new Vuex.Store({
    state,
    
  })
}
