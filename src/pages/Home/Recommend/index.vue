<template>
  <div class="outer">
    <p class="title">主力推荐</p>
    <div class="main">
      <div class="Rleft">
        <div class="ibox">
          <div class="iimg">
            <a href="#"><img :src="Timgs.img" alt="" /></a>
          </div>
          <p class="t1">
            <a href="#">{{ Timgs.booktitle }}</a>
          </p>
          <p class="zuozhe">
            <a href="#">{{ Timgs.author }}</a>
          </p>
        </div>
      </div>
      <div class="Rright">
        <div class="Rmain" v-for="(item, index) in imgs" :key="index">
          <div class="iimg">
            <a href="#"><img :src="item.img" alt="" /></a>
          </div>
          <p class="t1">
            <a href="#">{{ item.booktitle }}</a>
          </p>
          <p class="zuozhe">
            <a href="#">{{ item.author }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['Timgs','imgs']
};
</script>

<style lang="less" scoped>
.outer {
  padding: 3vw 5vw;
  width: 60%;
  .title {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 2vh;
  }
  .main {
    display: flex;
    .Rleft {
      width: 33%;
      height: 65vh;
      .ibox {
        background-color: #fafafa;
        padding-top: 2vh;
        height: 95%;
        padding-left: 1.5vw;
        z-index: -1;
        .iimg {
          width: 16vw;
          height: 40vh;
          overflow: hidden;
          border-radius: 6px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            display: block;
            box-shadow: 0px -10px 0px 0px rgba(0, 0, 0, 0),
              /*上边阴影  透明*/ -10px 0px 0px 0px rgba(0, 0, 0, 0),
              /*左边阴影  透明*/ 10px 0px 0px 0px rgba(0, 0, 0, 0),
              /*右边阴影  透明*/ 0px 10px 30px 0px rgba(0, 0, 0, 0.1); /*下边阴影 */
            transition: all 0.3s;
          }
          img:hover {
            transform: scale(1.1);
          }
        }
        .t1 {
          padding-top: 2vh;
          font-size: 24px;
        }
        .zuozhe {
          padding-top: 2vh;
          a {
            color: #bcbcbc;
          }
        }
      }
    }
    .Rright {
      width: 67%;
      height: 65vh;
      display: flex;
      flex-wrap: wrap;
      padding-left: 2vw;
      padding-top: 2vh;
      .Rmain {
        flex-grow: 1;
        border-radius: 6px;
        .iimg {
          width: 8vw;
          height: 18vh;
          overflow: hidden;
          border-radius: 6px;
          img {
            flex: 1;
            width: 8vw;
            height: 18vh;
            border-radius: 6px;
            box-shadow: 0px -10px 0px 0px rgba(0, 0, 0, 0),
              /*上边阴影  透明*/ -10px 0px 0px 0px rgba(0, 0, 0, 0),
              /*左边阴影  透明*/ 10px 0px 0px 0px rgba(0, 0, 0, 0),
              /*右边阴影  透明*/ 0px 10px 30px 0px rgba(0, 0, 0, 0.1); /*下边阴影 */
            transition: all 0.3s;
          }
          img:hover {
            transform: scale(1.1);
          }
        }
        .t1 {
          padding-top: 2vh;
          width: 8vw;
          word-wrap: break-word; /* 强制换行 */
          font-size: 16px;
        }
        .t1:hover {
          color: #ff5f00;
        }
        .zuozhe {
          padding-top: 2vh;
          a {
            color: #bcbcbc;
          }
        }
      }
    }
  }
}
</style>