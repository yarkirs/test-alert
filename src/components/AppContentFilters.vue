<template>
  <div>
    <form action="#">
      <b-row>
        <b-col><the-filter title="Комнаты" type="checkbox" until="floor"></the-filter
        ></b-col>
        <b-col
          ><the-filter title="Этаж" type="range" until="floor"></the-filter
        ></b-col>
        <b-col>
          <the-filter title="Площадь" type="range" until="floor"></the-filter
        ></b-col>
        <b-col
          ><the-filter title="Цена" type="range" until="floor"></the-filter
        ></b-col>
        <b-col><button class="btn btn-primary">Применить</button>
        <button class="btn mt-2">Сбросить изменения</button>  </b-col>
      </b-row>
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

<style lang="scss">
</style>