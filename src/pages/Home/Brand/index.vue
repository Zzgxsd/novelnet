<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img imgs" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination paginations" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Brand",
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./Brandimages/1.jpg"),
        },
        {
          id: "0002",
          imgUrl: require("./Brandimages/2.jpg"),
        },
        {
          id: "0003",
          imgUrl: require("./Brandimages/3.jpg"),
        },
        {
          id: "0004",
          imgUrl: require("./Brandimages/4.jpg"),
        },
      ],
      swiperOptions: {
        loop: true,
        //过渡时间
        speed: 1000,
        //自动轮播
        autoplay: {
          //时间间隔
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped lang="less">
.wrapper {
  .imgs {
    width: 100%;
    position: relative;
  }
  .paginations {
    bottom: 60px;
  }
}
::v-deep .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  opacity: 1;
}
::v-deep .swiper-pagination-bullet-active {
  width: 16px;
  height: 8px;
  border-radius: 3px;
  opacity: 1;
  background-color: #ffffff;
}
</style>