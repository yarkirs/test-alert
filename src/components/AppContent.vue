<template>
  <b-container class="bg-white mt-2 rounded border border-white" fluid="xl">
    <div class="main__container p-5 rounded">
      <h1 class="text-center">
        <strong>Lorem ipsum dolor sit </strong>
      </h1>
      <app-content-filters></app-content-filters>
      <div class="main__housing mt-5">
        <b-row>
          <b-col cols="4" xl="3" lg="4" md="6" sm="12" class="mb-4"
          v-for="room in rooms" :key="room.building_id">
            <app-content-card
              :price="room.price"
              :number="room.number"
              :rooms="room.rooms"
              :square="room.square"
              :floor="room.floor"
              pathImg="../assets/room.jpg"
            ></app-content-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
/* eslint-disable */
import AppContentCard from './AppContentCard.vue';
import AppContentFilters from "./AppContentFilters.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { AppContentFilters, AppContentCard },
  methods: {
    ...mapActions([
      'getData',
    ])
  },
  computed: {
    // ...mapGetters([
    //   'getApartments',
    // ])
    rooms() {
      let data = this.$store.getters.getApartments
      return data
    }
  },
  mounted() {
    this.getData()
  },
};
</script>

<style lang="scss" >
.main__container {
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
</style>

