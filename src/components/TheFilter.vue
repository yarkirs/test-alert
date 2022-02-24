<template>
  <div class="filters">
    <div class="range">
        <h3>{{ title }}</h3>
      <input type="number" />
      <input type="number" />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value="0"
        />
        <input type="range" min="0" max="1000" step="1" value="1000" />
      </div>
    </div>
    <div class="radio"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["range", "radio"].includes(value);
      },
    },
    title: {
      type: String,
      required: false,
    },
    until: {
      type: String,
      default: null,
      required: false,
      validator(value) {
        return ["floor", "area", "price", null].includes(value);
      },
    },
  },
  data() {
    return {
      isRange: "",
    };
  },
};
</script>

<style lang="scss">
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
  &svg,
  input[type="range"] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin: -7px;
  }
}
</style>