<template>
  <b-container class="bg-white mt-2 rounded border border-white" fluid="xl">
    <div class="main__container p-5 rounded">
      <h1 class="text-center">
        <strong>Lorem ipsum dolor sit </strong>
      </h1>
      <app-content-filters></app-content-filters>
      <div class="main__housing mt-5">
        <b-row >
          <b-col cols="4" xl="3" lg="4" md="6" sm="12"  class="mb-4" >
            <app-content-card
            :price="2720"
            :number="256"
            :rooms="1"
            :square="22.32"
            :floor="2"
            pathImg="../assets/room.jpg"
            ></app-content-card>
          </b-col>
          <b-col cols="4" xl="3" lg="4" md="6" sm="12" class="mb-4">
            <app-content-card
            :price="2720"
            :number="256"
            :rooms="1"
            :square="22.32"
            :floor="2"
            pathImg="../assets/room.jpg"
            ></app-content-card>
          </b-col>
          <b-col cols="4" xl="3" lg="4" md="6" sm="12" class="mb-4"><app-content-card
            :price="2720"
            :number="256"
            :rooms="1"
            :square="22.32"
            :floor="2"
            pathImg="../assets/room.jpg"
            ></app-content-card></b-col>
          <b-col cols="4" xl="3" lg="4" md="6" sm="12" class="mb-4"><app-content-card
            :price="2720"
            :number="256"
            :rooms="1"
            :square="22.32"
            :floor="2"
            pathImg="../assets/room.jpg"
            ></app-content-card></b-col>

        </b-row>
      </div>
    </div>
  </b-container>

</template>

<script>
/* eslint-disable */
import AppContentCard from './AppContentCard.vue';
import AppContentFilters from "./AppContentFilters.vue";
export default {
  components: { AppContentFilters, AppContentCard },
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

