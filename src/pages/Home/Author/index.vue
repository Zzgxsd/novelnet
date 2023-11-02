<template>
  <div class="outer">
    <p class="title">新锐作家</p>
    <section class="content">
      <div class="item" v-for="(item, index) in Aimgs" :key="index">
        <div class="iimg">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="Abox">
          <p class="booktitle">{{ item.booktitle }}</p>
          <p class="bookauthor">{{ item.bookauthor }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Aimgs: [
        {
          id: "1",
          imgUrl: require("./images/renwu-01.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "2",
          imgUrl: require("./images/renwu-03.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "3",
          imgUrl: require("./images/renwu-08.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "4",
          imgUrl: require("./images/renwu-10.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "5",
          imgUrl: require("./images/renwu-12.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "6",
          imgUrl: require("./images/renwu-13.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "7",
          imgUrl: require("./images/renwu-16.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "8",
          imgUrl: require("./images/renwu-17.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "9",
          imgUrl: require("./images/renwu-19.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
        {
          id: "10",
          imgUrl: require("./images/renwu-20.svg"),
          booktitle: "特工易冷",
          bookauthor: "骁骑校",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.outer {
  padding: 0 5vw 9vh 5vw;
  width: 88%;
  .title {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 2vh;
  }
  .content {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    .item {
      display: inline-block;
      margin: 10px;
      width: 200px;
      height: 200px;
      .iimg {
        width: 75px;
        height: 75px;
        background-color: #ffffff;
        border-radius: 50%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        cursor: pointer;
        img {
          position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .Abox {
        width: 100%;
        height: 75%;
        background: #f8f7f1;
        border-radius: 10px;
        position: relative;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
        .booktitle {
          text-align: center;
          padding-top: 8vh;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }
        .booktitle:hover {
          color: #ff5f00;
        }
        .bookauthor {
          text-align: center;
          padding-top: 2vh;
          cursor: pointer;
        }
        .bookauthor:hover {
          color: #ff5f00;
        }
      }
    }
  }
  /* 1,滚动条 */
  .content::-webkit-scrollbar {
    width: 20px; /* 纵向滚动条 宽度 */
    height: 5px; /* 横向滚动条 高度 */
    border-radius: 10px; /* 整体 圆角 */
  }
  /* 2,滚动条两端的按钮 */
  .content::-webkit-scrollbar-button {
    width: 30px; /* 横向滚动条 宽度 */
    height: 20px; /* 纵向滚动条 高度 */
  }
  /* 3,外层轨道 */
  .content::-webkit-scrollbar-track {
    /* background: red; */
    border-radius: 10px;
    background-color: #ffffff;
  }
  /* 4.内层轨道，它会覆盖外层轨道的样式。 */
  .content::-webkit-scrollbar-track-piece {
    width: 5px;
    margin: 0 -2px 0;
  }
  /* 5,滑块 */
  .content::-webkit-scrollbar-thumb {
    background: #bec5ca;
    min-height: 50px;
    min-width: 50px;
    border-radius: 10px;
  }
  /* 横向滑块悬浮 */
  .content::-webkit-scrollbar-thumb:horizontal:hover {
    background: rgb(165, 134, 134);
  }
}
</style>