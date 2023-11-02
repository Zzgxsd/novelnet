<template>
  <div class="outer">
    <div class="mheader">
      <ul>
        <h5>读者:</h5>
        <li @click="GenderVar = item" :class="['item', GenderVar == item ? 'active' : '']"
         v-for="(item, index) in Gender" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul>
        <h5>分类:</h5>
        <li @click="classificationVar = item" :class="['item', classificationVar == item ? 'active' : '']"
          v-for="(item, index) in classification" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul>
        <h5>状态:</h5>
        <li @click="StatusVar = item" :class="['item', StatusVar == item ? 'active' : '']"
          v-for="(item, index) in Status" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="mmian">
      <!-- <img src="../../assets/images/10001.png" alt=""> -->
      <div class="bigbook" v-if="ComDataList.length">
        <router-link
          :to="{
            path: '/Details',
            query: {
              id:item.id,
              bookauthor: item.bookauthor,
              imgUrl:item.imgUrl,
              booktitle:item.booktitle,
              classificationindex:item.classificationindex,
              Statusindex:item.Statusindex,
              bookjj:item.bookjj,
              Numwords:item.Numwords,
              Numreads:item.Numreads
            },
          }"
          div
          class="book"
          v-for="(item, index) in ComDataList"
          :key="index"
        >
          <img :src="require(`@/assets/images/${item.imgUrl}`)" alt="" />
          <div class="xx">
            <h1>{{ item.booktitle }}</h1>
            <p>作者:{{ item.bookauthor }}</p>
            <p class="jj">简介:{{ item.bookjj }}</p>
          </div>
        </router-link>
      </div>
      <div v-else class="not">无相关书籍</div>
    </div>
  </div>
</template>

<script>
import List from "@/data/booksList.json"
export default {
  data() {
    return {
      Gender: ["全部", "男生", "女生"],
      classification: ["全部", "主题", "角色", "情节"],
      Status: ["全部", "已完结", "连载中"],
      numword: ["全部", "30万以下", "30-50万", "50-100万"],
      GenderVar: "全部",
      classificationVar: "全部",
      StatusVar: "全部",
      list: [],
    };
  },
  methods: {
    getlist(){
      this.list = List
      // console.log(List);
    }
  },
  mounted(){
    this.getlist()
  },
  computed: {
    ComDataList() {
      return this.list.filter((item) => {
        if (
          (this.GenderVar == "全部" || this.GenderVar == item.Genderindex) &&
          (this.classificationVar == "全部" ||
            this.classificationVar == item.classificationindex) &&
          (this.StatusVar == "全部" || this.StatusVar == item.Statusindex)
        ) {
          return item; // 把符合条件的数据返回,模板中通过this.ComDataList可直接动态读取数据
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.outer {
  .mheader {
    height: 27vh;
    padding: 8vh 0 0 0;
    background-color: #f6f6f6;
    ul {
      padding: 4vh 0 0 6vw;
      display: flex;
      h5 {
        font-size: 18px;
      }
      li {
        cursor: pointer;
        font-size: 18px;
        margin: 0 20px;
        padding: 0 10px;
        border-radius: 10px;
      }
      .active {
        color: #fa6725;
        background-color: antiquewhite;
        border: #fa6725 2px solid;
      }
    }
  }
  .mmian {
    height: 80vh;
    margin: 20px 0;
    .bigbook {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .book {
        cursor: pointer;
        margin: 20px 50px;
        width: 26%;
        display: flex;
        img {
          width: 125px;
          height: 175px;
        }
        .xx {
          padding: 20px;
          p {
            padding-top: 15px;
            color: #999;
          }
          .jj {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .not {
      font-size: 24px;
      font-weight: bold;
      color: #fa6725;
      position: relative;
      top: 50%;
      text-align: center;
    }
  }
}
</style>