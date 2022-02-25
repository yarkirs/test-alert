<template>
  <div>
    <form action="#">
      <div class="filters-wrap row-cols-md-5 row">
        <the-filter class="col" title="Комнаты" type="checkbox"></the-filter>
        <the-filter
          class="col"
          title="Этаж"
          type="range"
          until="floor"
        ></the-filter>
        <the-filter
          class="col"
          title="Площадь"
          type="range"
          until="square"
        ></the-filter>
        <the-filter
          class="col"
          title="Цена"
          type="range"
          until="price"
        ></the-filter>
        <div class="filters-btn col">
          <button class="btn-apply">Применить</button>
          <div class="text-center">
            <a href="#" class="link-reset">Сбросить фильтр</a>
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
  components: { TheFilter },
  data() {
    return {
      value: "2",
    };
  },
};
</script>

<style lang="scss" scoped>
.filters-btn{
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