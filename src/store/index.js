/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const FIREBASE_URL = 'https://test-alert-38ba7-default-rtdb.firebaseio.com/.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apartments: [],
  },
  mutations: {
    setApartmentsToState: (state, apartments) =>{
      state.apartments = apartments
    }
  },
  actions: {
    getData({commit}) {
      return axios.get(FIREBASE_URL)
        .then(request => {
          commit('setApartmentsToState', request.data)
          console.log('Данные получены!', request.data);
          return request
        })
        .catch(err =>{
          console.warn('Данные не получены =(', err)
          return err
        })
    }
  },
  getters: {
    getApartments(state){
      return state.apartments
    }
  }
})
