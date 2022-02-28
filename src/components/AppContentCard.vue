<template>
  <div class="card-rooms">
    <div class="card-info">
      <h5>{{ floor }} Этаж</h5>
      <span
        ><strong>{{ rooms === 1 ? rooms +' комната' : rooms + ' комнаты'}} - {{ square }} м<sup>2</sup></strong></span
      >
    </div>
    <div class="card-wrap card">
      <div class="card-wrap-number">
        <div class="card-number">
          <p class="text-center">№{{ number }}</p>
        </div>
      </div>
      <div class="card-wrap-img">
        <!-- <img :src="setPath" alt="room" /> -->
        <img src="../assets/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg" alt="room" />
      </div>
    </div>
    <div class="card-container">
      <div class="card-price text-right">
        <p>{{ newPrice }}р.</p>

        <span>{{ sqPrice }}р. за м<sup>2</sup></span>
      </div>
      <button class="card-btn">Подробнее</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    price: {
      type: Number,
      required: true
    },
    square: {
      type: Number,
      required: true
    },
    floor: {
      type: Number,
      required: true
    },
    pathImg: {
      type: String,
      required: false,
      default: ''
    },
    rooms: {
      type: Number,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  methods: {
    addSpace (number) {
      number += ''
      number = new Array(4 - (number.length % 3)).join('U') + number
      return number.replace(/([0-9U]{3})/g, '$1 ').replace(/U/g, '')
    }
  },
  computed: {
    setPath () {
      return '../assets' + this.pathImg
    },
    sqPrice () {
      const NewPrice = Math.round(this.price / this.square)
      return this.addSpace(NewPrice)
    },

    newPrice () {
      return this.addSpace(this.price)
    }
  }
}
</script>
<style lang="scss">
.card {
  &-btn {
    display: block;
    visibility: hidden;
    // transition: all 0.7s ease;
    background: #70d24e;
    border-radius: 2px 2px 5px 5px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    width: 100%;
    border: none;
    font-size: 0;
    padding: 0;
    margin: 0;
    // font-size: 14px;
    font-weight: 700;
    // // margin-top: 10px;
    // padding: 10px;
            transition-duration: 0.5s;

    &:focus {
      outline: none;
    }
    &:hover {
      background: darken(#70d24e, 10%);
    }
  }
  &-price {
    color: #2c323a;
    margin-top: 11px;
    line-height: 28px;
    font-weight: bold;
    & p {
      font-size: 20px;
      margin: 0;
    }
    & span {
      font-size: 12px;
      color: #95989c;
    }
  }
  &-wrap {
    position: relative;
    text-align: center;
    cursor: pointer;
    &-img {
      max-width: 230px;
      max-height: 188px;
      & img {
        width: 100%;
        transition-duration: 0.5s;
        }
    //   padding-bottom: 31px;
    }
  }
  &-wrap-number {
    display: flex;
    flex-direction: row-reverse;
  }
  &-number {
    width: 62px;
    height: 30px;
    font-family: "GothamPro-bold";
    border: 1px solid #ebebeb;
    border-radius: 5px;
    border-right-style: none;
    border-top-style: none;
    box-sizing: border-box;
    & p {
      font-size: 14px;
      line-height: 28px;
      font-family: "GothamPro-bold";
    }
  }
  &-rooms {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgba(86, 86, 86, 0.5);
    min-height: 350px;
    padding: 8px 15px;
    &:hover {
      -webkit-transition: all 0.7s ease;
      transition: all 0.7s ease;
      .card-btn {
        display: block;
        visibility: visible;
        // -webkit-transition: all 0.7s ease;
        // transition: all 0.7s ease;
        font-size: 14px;
      margin-top: 10px;
      padding: 10px;

      }
      .card-wrap-img img {
        width: 80%;
        // padding-bottom: 0;
      }
    }
  }
  &-info {
    display: flex;
    justify-content: space-between;
    color: #2c323a;
    font-family: "GothamPro-bold";
    & span {
      font-size: 12px;
      //   padding-left: 5px;
    }
    & h5 {
      font-size: 12px;
      line-height: 28px;
      opacity: 0.5;
    }
  }
}
@media (max-width: 1201px) {
  .card {
    &-rooms{&:hover{
      .card-btn { margin-top: 0;}
      .card-wrap-img img {width: 100%;}}}
      &-btn {
        visibility: visible;
        font-size: 14px;
        padding: 10px;
        margin-top: 0;

      }
    &-info {
      flex-wrap: wrap;
      margin-bottom: 5px;
    }
    &-wrap {
      & img {
        // padding-bottom: 10px;
      }
    }
  }
}
</style>
