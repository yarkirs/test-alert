<template>
  <div>
    <div class="main__container rounded">
      <h1 class="text-center">
        <strong>Lorem ipsum dolor sit </strong>
      </h1>
      <app-content-filters></app-content-filters>
      <div class="main__housing mt-2">
        <b-row>
          <b-col>
            <app-content-card></app-content-card>
          </b-col>

        </b-row>
      </div>
    </div>
  </div>
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
  margin: 30px;
}
</style>

