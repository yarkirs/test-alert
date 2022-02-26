<template>
  <div class="filters">
    <div v-if="type == 'range'" class="range">
      <h3>{{ title }}</h3>
      <div class="range-values">
        <input type="number" v-model="minPrice" /><span>-</span>
        <input type="number" v-model="maxPrice" />
      </div>
      <div class="range-slider">
        <input
          type="range"
          :min="min"
          :max="max"
          :step="setStep"
          v-model="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          :min="min"
          :max="max"
          :step="setStep"
          v-model="maxPrice"
          @change="setRangeSlider"
        />
      </div>
    </div>
    <div v-if="type == 'checkbox'" class="checkbox">
      <h3>{{ title }}</h3>
      <div class="checkbox-wrap">
        <label class="checkbox-btn">
          <input type="checkbox" checked />
          <span>XS</span>
        </label>
        <label class="checkbox-btn">
          <input type="checkbox" />
          <span>1k</span>
        </label>
        <label class="checkbox-btn">
          <input type="checkbox" />
          <span>2k</span>
        </label>
        <label class="checkbox-btn">
          <input type="checkbox" />
          <span>3k</span>
        </label>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  props: {
    maxValue: {
        type: Number,
        default: 0,
        required: false,
      },
      minValue: {
        type: Number,
        default: 0,
        required: false,
      },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["range", "checkbox"].includes(value);
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
        return ["floor", "square", "price", null].includes(value);
      },

    },
  },
  data() {
    return {
      minPrice: 0,
      maxPrice: 1000,
    };
  },
  mounted() {
    setTimeout(() => {
      this.minPrice= this.minValue
    this.maxPrice = this.maxValue
    }, 500);
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
  computed: {
    max(){
      return this.maxValue
    },
    min(){
      return this.minValue
    },
    setStep() {
      const until = this.until
      switch (until) {
        case 'price': return 0.1;
        case 'floor': return 1;
        case 'square': return 1.1;
        default:
          break;
      }
    }
  },
};
</script>

<style lang="scss">
.checkbox {
  &-wrap {
    display: flex;
  }
  & h3 {
    font-size: 12px;
    font-weight: bold;
    color: #2c323a;
    // margin-left: 9%;
  }
  &-btn {
    display: inline-block;
    margin: 0 5px 0 0;
    user-select: none;
    position: relative;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #2c323a;

    &:hover {
      color: #666;
    }
    & input[type="checkbox"] {
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;
      box-sizing: border-box;
      border-radius: 5px;

      &:checked + span {
        background: #70d24e;
        border: 1px solid white;
        color: white;
      }
    }
    & span {
      display: inline-block;
      cursor: pointer;
      padding: 5px 10px;
      line-height: 30px;
      text-align: center;
      // width: 47px;
      // height: 40px;
      border: 1px solid #d8d8d8;
      border-radius: 5px;
      transition: background 0.2s ease;
    }
  }
}

.range {
  & h3 {
    font-size: 12px;
    font-weight: bold;
    color: #2c323a;
    margin-left: 15px;
    color: #2c323a;
  }
  &-values {
    display: flex;
    justify-content: center;
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
    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      width: 21px;
      background: #d8d8d8;
      border-radius: 15px;
      margin-left: -21px;
      transform: translateY(-100%);
    }
    &:before {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      width: 21px;
      background: #d8d8d8;
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