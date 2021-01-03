import Vue from 'vue'
import Vuex from 'vuex'

import merchandise from './merchandise'
import gallery from './gallery'
import raffle from './raffle'
import routes from './routes'
import sponsors from './sponsors'
import state from './state'
import auth from './auth'
import dates from './dates'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      merchandise,
      gallery,
      raffle,
      routes,
      sponsors,
      state,
      auth,
      dates
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
