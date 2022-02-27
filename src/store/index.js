/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const FIREBASE_URL = 'https://test-alert-38ba7-default-rtdb.firebaseio.com/.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apartments: [],
    sortedAparts: {
      floor: { max: null, min: null },
      square: { max: null, min: null },
      price: { max: null, min: null },
      numRooms: ['XS', '1k', '2k', '3k']
    },
  },
  mutations: {
    setApartmentsToState: (state, apartments) => {
      state.apartments = apartments

      let n = state.sortedAparts;

      const setValue = (property) => {
        let arr = [];
        for (let key in apartments) {
          arr.push(apartments[key][property])
        }
        n[property].max = Math.max(...arr)
        n[property].min = Math.min(...arr)
      }
      setValue('floor');
      setValue('price');
      setValue('square');

      console.log(n);
    }
  },
  actions: {
    sortData({ commit }, obj) {
      console.log('++++++++++', obj);
      return commit('getSortApart', obj)
    },
    getData({ commit }) {
      return axios.get(FIREBASE_URL)
        .then(request => {
          commit('setApartmentsToState', request.data)
          console.log('Данные получены!', request.data);
          return request
        })
        .catch(err => {
          console.warn('Данные не получены =(', err)
          return err
        })
    }
  },
  getters: {
    getSortApart(state) {
      return state.sortedAparts
    },
    getApartments(state) {
      return state.apartments
    }
  }
})
