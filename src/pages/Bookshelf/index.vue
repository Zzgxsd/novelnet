<template>
  <div class="outer">
    <div class="head"></div>
    <div class="main">
      <h3 class="bt">我的书架</h3>
      <ul v-if="clist.length > 0">
        <li v-for="(item, index) in clist" :key="index">
          <div class="port-1">
            <div class="image-box">
              <img :src="require(`../../assets/images/${item.imgUrl}`)" />
            </div>
            <div class="text-desc">
              <h3>{{ item.booktitle }}</h3>
              <p>{{ item.bookauthor }}</p>
              <p>{{ item.bookjj }}</p>
              <a class="btn" @click="del(index)">移出书架</a>
            </div>
          </div>
        </li>
      </ul>
      <ul v-else>
        <p class="no">无收藏书籍</p>
      </ul>
    </div>
  </div>
</template>

<script>
import List from "@/data/booksList.json";
export default {
  data() {
    return {
      // clist: JSON.parse(localStorage.getItem("locallist")),
      // 总数据
      list: [],
      // 收藏数据
      clist: [
        // {
        //   id: 1,
        //   imgUrl: "10001.png",
        //   booktitle: "特工易冷",
        //   bookauthor: "骁骑校",
        //   bookjj:
        //     "（原名特工易冷）玉梅饭店的厨子黄皮虎是个油腻猥琐的中年大叔，喜欢喝酒抽烟盘串，还经常尾随女学生，没人知道他的真实身份是众多美女心中的一代男神、退役特工易冷，隐于市井只为默默守护已经不认识自己的女儿。",
        // },
      ],
      // 获取id
      cid: "",
    };
  },
  methods: {
    del(index) {
      this.clist.splice(index, 1);
    },
    getList() {
      this.list = List;
    },
  },
  created() {
    this.$bus.$on("getBookid", (data) => {
      this.cid = data;
      this.clist.push(this.list[data - 1]);
      localStorage.setItem("locallist", JSON.stringify(this.clist));
    });

  },
  watch: {
    clist: {
      handler(newValue) {
        localStorage.setItem("locallist", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  mounted() {
    this.getList();
    // let book = {
    //   id: 1,
    //   imgUrl: "10001.png",
    //   booktitle: "特工易冷",
    //   bookauthor: "骁骑校",
    //   bookjj:
    //     "（原名特工易冷）玉梅饭店的厨子黄皮虎是个油腻猥琐的中年大叔，喜欢喝酒抽烟盘串，还经常尾随女学生，没人知道他的真实身份是众多美女心中的一代男神、退役特工易冷，隐于市井只为默默守护已经不认识自己的女儿。",
    // };
    // if (this.clist.length == 0) {
    //   return
    // } else {
      this.clist = JSON.parse(localStorage.getItem("locallist"));
    // } 
  },
  // 销毁对应自定义事件
  beforeDestroy() {
    this.$bus.$off("getBookid");
  },
};
</script>

<style lang="less" scoped>
.outer {
  height: 100vh;
  .head {
    height: 10vh;
    background-color: #f6f6f6;
  }
  .main {
    .no {
      font-size: 24px;
      font-weight: bold;
      color: rgb(0, 0, 0);
    }
    ul {
      // margin: 0 -1.5%;
      margin-left: 60px;
    }

    li {
      cursor: pointer;
      float: left;
      width: 23%;
      margin: 10px 1%;
      list-style: none;
    }
    .bt {
      text-align: center;
      padding: 40px 0 0 0;
      color: #4d92d9;
      font-size: 24px;
    }
    .image-box {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .port-1 {
      float: left;
      width: 200px;
      margin: 20px;
      position: relative;
      overflow: hidden;
      text-align: center;
      border: 4px solid rgba(255, 255, 255, 0.9);
      .text-desc {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        height: 100%;
        opacity: 0;
        width: 100%;
        // padding: 20px;
        opacity: 0.9;
        top: -140%;
        transition: 0.5s;
        color: #000;
        // padding: 0px 0px;
        h3 {
          font-size: 20px;
          margin-top: 30px;
          // margin: 5px 0 10px;
        }
        p {
          font-weight: 300;
          line-height: 20px;
          font-size: 14px;
          margin-bottom: 15px;
          margin-left: 10px;
          margin-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .btn {
          display: inline-block;
          padding: 5px 10px;
          font-size: 14px;
          color: #fff;
          border: 2px solid #4d92d9;
          background-color: #4d92d9;
          text-decoration: none;
          transition: 0.4s;
        }
        .btn:hover {
          background-color: transparent;
          color: #4d92d9;
          transition: 0.4s;
        }
      }
      img {
        transition: 0.5s;
        max-width: 100%;
        vertical-align: middle;
      }
    }
    .port-1:hover img {
      transform: scale(1.2);
    }
    .port-1:hover .text-desc {
      top: 0;
    }
  }
}
</style>