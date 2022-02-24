<template>
  <div class="filters">
    <div class="range">
      <h3>{{ title }}</h3>
      <div class="range-values">
        <input type="number" v-model="minPrice" /><span>-</span>
        <input type="number" v-model="maxPrice" />
      </div>
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value="0"
          v-model="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value="1000"
          v-model="maxPrice"
          @change="setRangeSlider"
        />
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
      minPrice: 0,
      maxPrice: 1000,
    };
  },
  methods: {
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
};
</script>

<style lang="scss">
.range {
  &-values {
    display: flex;
    justify-content: center ;
    & span {
      color: #2c323a;
      opacity: 0.5;
      font-size: 12px;
      font-weight: bold;
      transform: translateY(25%);
      margin: 0 5px;
    }
    & input {
      background: #ffffff;
      border: 1px solid #d8d8d8;
      box-sizing: border-box;
      border-radius: 5px;
      width: 80px;
      height: 40px;
      text-align: center;
      font-size: 16px;
      line-height: 28px;
      color: #2c323a;

      &:focus {
        outline: none;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  &-slider {
    width: 100%;
    margin: 15px 26px;
    display: inline-block;
    text-align: center;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      width: 21px;
      background: #D8D8D8;
      border-radius: 15px;
      margin-left: -21px;
      transform: translateY(-100%);
    }
    &:before{
       content: '';
      position: absolute;
      display: block;
      height: 2px;
      width: 21px;
      background: #D8D8D8;
      border-radius: 15px;
      margin-left: 123px;
      z-index: 2;
      transform: translateY(-100%);
    }
    &svg,
    input[type="range"] {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: auto;
      width: 80%;
      appearance: none !important;
      &::-webkit-slider-runnable-track {
        height: 2px;
        background: #70d24e;
        border-radius: 15px;
      }
      &::-webkit-slider-thumb {
        border-radius: 16px;
        height: 16px;
        width: 16px;
        border: 3px solid white;
        background-color: #70d24e;
        box-shadow: 0px 5px 10px rgba(86, 86, 86, 0.05);
        -webkit-appearance: none;
        cursor: pointer;
      }
    }
    input[type="range"]::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      margin: -7px;
    }
  }
}
</style>