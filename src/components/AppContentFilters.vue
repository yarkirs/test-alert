<template>
  <div>
    <form action="#">
      <b-row>
        <b-col></b-col>
        <b-col>
          <label for="range-1">Этаж</label>
          <input type="number">
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="0"
            max="100"
          ></b-form-input>
          <div class="mt-2">Value: {{ value }}</div>
          </b-col
        >
        <b-col>
        </b-col>
        <b-col>
        </b-col>
        <b-col>
            <the-filter
                title="Этаж"
                type="range"
                until="floor"
            ></the-filter>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import TheFilter from './TheFilter.vue'
export default {
  components: { TheFilter },
  data() {
    return {
      value: "2",
    };
  },
};
</script>

<style lang="scss">


</style>