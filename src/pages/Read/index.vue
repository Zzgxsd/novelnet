<template>
  <div class="outer">
    <div class="right">
      <div class="fh" @click="goLibrary">
        <img src="../../assets/zhiyuanfanhui16.svg" alt="" srcset="">
      </div>
    </div>
    <div class="main">
      <div class="" v-for="(item, index) in clist.chapter" :key="index">
        <div v-show="page==index" class="bmain">
          <p class="bt"><span>第{{ index+1 }}章 </span><span> {{ item.name }}</span></p>
          <p class="nr" v-html="item.content"></p>
          <div class="next"><a href="#top" @click="nextpage">下一章</a></div>
        </div>
      </div>
    </div>
    <div class="left">  
      <h4>目录</h4>
      <div class="catalogue">
        <ul>
          <li @click="changePage(index)" v-for="(item,index) in pages" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/data/booksList.json";
export default {
  data() {
    return {
      clist: [],
      list: [],
      cid: this.$route.query.id,
      //章节数
      pages:[1,2,3,4,5,6,7,8,9],
      //当前章节
      page: 0
    };
  },
  methods: {
    getList() {
      this.list = List;
    },
    changePage(index){
      this.page = index
    },
    nextpage(){
      this.page++;
    },
    goLibrary(){
      this.$router.replace({
        name: "library",
      });
    }
  },
  computed:{},
  created() {
    this.getList();
  },
  mounted() {
    this.clist = this.list[this.cid - 1];
    console.log(this.list[this.cid - 1]);
  },
};
</script>

<style scoped>
.outer {
  display: flex;
  width: 100vw;
  /* height: 200vh; */
  max-width: 100%;
  background-color: #ded9c5;
}
.main {
  margin: 0 auto;
  /* height: 200vh; */
  width: 60%;
  background-color: #f9f7ef;
}
.right {
  width: 20%;
}
/* 目录 */
.left {
  width: 20%;
}
.left h4{
  position: fixed;
  right: 120px;
  top: 50px;
  font-size: 24px;
  text-align: center;
}
.catalogue {
  position: fixed;
  /* background: #e4f7fd61; */
  /* border: 2px solid #0786ada1; */
  border-radius: 8px;
  width: 260px; 
  right: 10px;
  top: 100px;
}
ul {
  padding: 0;
  overflow: hidden;
  margin-right: -10px;
  margin-bottom: -10px;
  margin-top: 0;
}
.catalogue li {
  list-style: none;
  text-align: center;
  line-height: 60px;
  background: rgba(241, 188, 113, 0.65);
  border-radius: 8px;
  float: left;
  width: 80px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}
.catalogue li:hover{
  background: rgba(247, 82, 64, 0.856);
  color: #f9f7ef;
  cursor: pointer;
}
/* 内容 */
.bmain{
  padding: 80px 40px 40px 80px;
}
.bt{
  font-size: 24px;
}
.nr{
  margin-top: 40px;
  font-size: 18px;
  text-indent: 2em;
}
.bmain .next{
  margin-top: 50px;
  padding: 5px;
  font-size: 20px;
  line-height: 18px;
}
.bmain .next a:hover{
  color: #fc5531;
}

/* 右侧 */
.right .fh{
  position: fixed;
  left: 12%;
  top: 10%;
  cursor: pointer;
}

.right .fh img{
  width: 80px;
  height: 80px;
}
</style>