<template>
  <b-container class="bg-white mt-2 rounded border border-white" fluid="xl">
    <div class="main__container p-5 rounded">
      <h1 class="text-center">
        <strong>Lorem ipsum dolor sit </strong>
      </h1>
      <app-content-filters @get-sorted="sorted" @get-reset="reset">
      </app-content-filters>
      <div class="main__housing mt-5">
        <b-row>
          <b-col
            cols="4"
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
import AppContentCard from "./AppContentCard.vue";
import AppContentFilters from "./AppContentFilters.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AppContentFilters, AppContentCard },
  data() {
    return {
      copyApart: {},
      isSorted: false,
    };
  },
  methods: {
    ...mapActions(["getData"]),
    reset() {
      const data = this.copyApart;
      Object.assign(data, this.$store.getters.getApartments);
      this.isSorted = !this.isSorted;
      console.log('Reset');
    },
    sorted() {
      const sortData = this.$store.getters.getSortApart;
      console.log("Sort!");
      const data = this.copyApart;
      Object.assign(data, this.$store.getters.getApartments);

      const deletForSort = (property) => {
        switch (property) {
          case "price":
          case "floor":
          case "square":
            for (let key in data) {
              data[key][property];
              sortData[property];
              if (
                data[key][property] <= sortData[property].max &&
                data[key][property] >= sortData[property].min
              ) {
              } else {
                delete data[key];
              }
            }
            break;
          case "numRooms":
            for(let key in data) {
              let n = data[key].size

              if(!sortData[property].find(i => i === n)){
                  delete data[key]
                }
            }
            break;
          default:
            break;
        }
      };
      deletForSort('price');
      deletForSort('floor');
      deletForSort('square');
      deletForSort("numRooms");

      this.isSorted = !this.isSorted;
      return data;
    },
  },
  watch: {
    isSorted(value) {
      console.log(value);
    },
  },
  computed: {
    // ...mapGetters([
    //   'getApartments',
    // ])
    getRooms() {
      return Object.assign(this.copyApart, this.$store.getters.getApartments);
    },
  },
  mounted() {
    this.getData();
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

