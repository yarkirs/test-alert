<template>
  <div>
    <form action="#">
      <div class="filters-wrap row-cols-md-5 row">
        <the-filter class="col"
        title="Комнаты"
        type="checkbox"
        @change-input="onChange">
        </the-filter>
        <the-filter
          class="col"
          title="Этаж"
          type="range"
          char="floor"
          :maxValue="getValue('floor', 'max')"
          :minValue="getValue('floor', 'min')"
          @change-input="onChange"
        ></the-filter>
        <the-filter
          class="col"
          title="Площадь"
          type="range"
          char="square"
          :maxValue="getValue('square', 'max')"
          :minValue="getValue('square', 'min')"
          @change-input="onChange"
        ></the-filter>
        <the-filter
          class="col"
          title="Цена"
          type="range"
          char="price"
          :maxValue="getValue('price', 'max')"
          :minValue="getValue('price', 'min')"
          @change-input="onChange"
        ></the-filter>
        <div class="filters-btn col">
          <button class="btn-apply"
          @click.prevent="getSort"
          >Применить</button>
          <div class="text-center">
            <a href="#" class="link-reset"
            @click.prevent="reset"
            >Сбросить фильтр</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import TheFilter from "./TheFilter.vue";
export default {
  data() {
    return {
      isReset: false,
    }
  },

  methods: {
    onChange(value){
      console.log('change input ', value)
      const sortData = this.$store.state.sortedAparts;

      if(Array.isArray(value)){
        sortData.numRooms = [...new Set(value)]
      } else {
        switch (value.type) {
        case 'square':
        case 'floor':
          sortData[value.type].max = +value.maxPrice
          sortData[value.type].min = +value.minPrice
          break;
        case 'price':
          sortData[value.type].max = parseFloat(value.maxPrice) * 1000000 // Потеря точности!
          sortData[value.type].min = parseFloat(value.minPrice) * 1000000
          break;
        default:
          break;
      }
      }
    },
    reset() {
      this.$emit('get-reset')
      this.isReset = !this.isReset
    },
    getSort(){
      this.$emit('get-sorted')
    },
    getValue(property, value) {
      let data = this.$store.getters.getApartments;

      if (typeof property != "string" || (value != "max" && value != "min")) {

        console.log("Данные должны быть строками!", property, '------- ',value);
        return false;
      }
      let dataObj = [];
      for (let key in data) {
        if (data[key][property] == false) return false;

          switch (property) {
            case 'price':
              let roundPrice = data[key][property] / 1000000
              dataObj.push(parseFloat(roundPrice.toFixed(2)));
              break;
            case 'square': dataObj.push(data[key][property].toFixed(0));
            break;
            case 'floor': dataObj.push(data[key][property]);
              break;
          }

      }
      return Math[value](...dataObj);
    },
  },
  computed: {},
  components: { TheFilter },
};
</script>

<style lang="scss" scoped>
.filters-btn {
  transform: translateY(23%);
}
.btn-apply {
  display: block;
  background: #70d24e;
  border-radius: 2px 2px 5px 5px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 700;
  // margin-top: 10px;
  padding: 9px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: darken(#70d24e, 10%);
  }
}
.link-reset {
  position: relative;
  font-weight: bold;
  font-size: 10px;
  display: inline-block;
  color: #2c323a;
  line-height: 28px;
  cursor: pointer;
  text-decoration: none;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #70d24e;
    content: "";
    transition: width 0.3s ease-out;
  }
  &:hover:after {
    width: 100%;
  }
}
</style>