<template>
  <div class="card-rooms col-3">
    <div class="card-info">
      <h5>3 Этаж</h5>
      <span
        ><strong>1 комната - 22.34 м<sup>2</sup></strong></span
      >
    </div>
    <div class="card-wrap card">
      <div class="card-wrap-number">
        <div class="card-number">
          <p class="text-center">№256</p>
        </div>
      </div>
      <img src="../assets/room.jpg" alt="Avatar" />
    </div>
    <div class="card-container">
      <div class="card-price text-right">
        <p>{{ price }}р.</p>
        <span>119 000 р. за м<sup>2</sup></span>
      </div>
      <button class="card-btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      price: 2729860,
    };
  },
};
</script>

<style lang="scss">
.card {
  &-btn {
    display: none;
    transition: all 0.5s ease;
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
    padding: 10px;
    &:focus{
        outline: none;
    }
    &:hover{
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
    cursor: pointer;
    & img {
      width: 100%;
      transition-duration: 0.5s;
      padding-bottom: 31px;

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
    height: 350px;
    &:hover {
      -webkit-transition: all 0.7s ease;
      transition: all 0.7s ease;
      .card-btn {
          -webkit-transition: all 0.7s ease;
           transition: all 0.7s ease;
          display: block;
      }
      img {
        transition: all 0.7s ease;
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        padding-bottom: 0;
      }
    }
  }
  &-info {
    display: flex;
    justify-content: space-between;
    color: #2c323a;
    font-family: "GothamPro-bold";
    padding-top: 12px;

    & span {
      font-size: 12px;
    }
    & h5 {
      font-size: 12px;
      line-height: 28px;
      opacity: 0.5;
    }
  }
  &-container {
    padding-bottom: 10px;
  }
}
</style>