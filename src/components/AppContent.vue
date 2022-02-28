<template>
    <b-container class="bg-white mt-3 mb-5 rounded border border-white" fluid="sm">
      <div class="main__container rounded">
      <h1 class="text-center">
        <strong>Lorem ipsum dolor sit </strong>
      </h1>
      <app-content-filters @get-sorted="sorted" @get-reset="reset">
      </app-content-filters>
      <div class="main__housing mt-5">
        <b-row>
          <b-col
            cols="12"
            xl="3"
            lg="4"
            md="6"
            sm="12"
            class="mb-4"
            v-for="room in getRooms"
            :key="room.building_id"
            :isSorted="isSorted"
          >
            <app-content-card
              :price="room.price"
              :number="room.number"
              :rooms="room.rooms"
              :square="room.square"
              :floor="room.floor"
              :pathImg="room.plan"
            ></app-content-card>
          </b-col>
        </b-row>
      </div>
    </div>
    </b-container>
</template>

<script>
/* eslint-disable */
import AppContentCard from './AppContentCard.vue'
import AppContentFilters from './AppContentFilters.vue'
import { mapActions } from 'vuex'

export default {
  components: { AppContentFilters, AppContentCard },
  data () {
    return {
      copyApart: {},
      isSorted: false
    }
  },
  methods: {
    ...mapActions(['getData']),
    reset () {
      const data = this.copyApart
      Object.assign(data, this.$store.getters.getApartments)
      this.isSorted = !this.isSorted
      console.log('Reset')
    },
    sorted () {
      const sortData = this.$store.getters.getSortApart
      console.log('Sort!')
      const data = this.copyApart
      Object.assign(data, this.$store.getters.getApartments)

      const deletForSort = (property) => {
        switch (property) {
          case 'price':
          case 'floor':
          case 'square':
            for (const key in data) {
              data[key][property]
              sortData[property]
              if (
                data[key][property] <= sortData[property].max &&
                data[key][property] >= sortData[property].min
              ) {
              } else {
                delete data[key]
              }
            }
            break
          case 'numRooms':
            for (const key in data) {
              const n = data[key].size

              if (!sortData[property].find(i => i === n)) {
                delete data[key]
              }
            }
            break
          default:
            break
        }
      }
      deletForSort('price')
      deletForSort('floor')
      deletForSort('square')
      deletForSort('numRooms')

      this.isSorted = !this.isSorted
      return data
    }
  },
  watch: {
    isSorted (value) {
    }
  },
  computed: {
    getRooms () {
      return Object.assign(this.copyApart, this.$store.getters.getApartments)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" >
.main__container {
  -webkit-transition: all 0.7s ease;
        transition: all 0.7s ease;
  padding: 3rem;
  & h1 {
    font-family: "GothamPro";
    font-size: 34px;
    line-height: 60px;
    text-transform: uppercase;
    color: #2c323a;
  }
  background-color: #f8f8f8;
  padding-top: 38px;
  margin: 5px;
}
@media (max-width: 991px) {
  .main__container {
    & h1 {
      font-size: 25px;
    }
  }
}
@media (max-width: 600px) {
  .main__container {
    padding: 0;
    & h1 {
      font-size: 20px;
    }
  }
}
</style>
