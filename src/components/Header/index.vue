<template>
  <div class="Header" :style="topNavBg">
    <div class="Hleft">
      <img src="./image/9069091_book_open_icon.svg" alt="" />
      <h1>501小说网</h1>
    </div>
    <div class="Hright">
      <ul>
        <li @click="onActive(1)">
          <router-link to="/home">首页</router-link><em></em>
        </li>
        <li @click="onActive(2)">
          <router-link to="/library">书库</router-link><em></em>
        </li>
        <li @click="onActive(3)">
          <router-link to="/bookshelf">书架</router-link><em></em>
        </li>
      </ul>
      <div class="search">
        <input type="search" name="" id="" placeholder="输入书名或作者" />
        <img src="./image/搜索.svg" alt="" />
      </div>
      <div class="login"><router-link to="/login">登录</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNum: 1,
      topNavBg: {
        backgroundColor: "",
      },
    };
  },
  methods: {
    onActive(i) {
      this.activeNum = i;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.topNavBg.backgroundColor = `rgba(255,255,255,1)`; // scrollTop + 多少根据自己的需求设置
      } else if (scrollTop === 0) {
        this.topNavBg.backgroundColor = "transparent"; // 设置回到顶部时，背景颜色为透明
      }
    },
    // 滚动之前重置
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听页面滚动
  },
};
</script>

<style scoped>
.Header {
  z-index: 99;
  display: flex;
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
}
.Hleft {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Hleft img {
  width: 50px;
  height: 50px;
}
.Hleft h1 {
  line-height: 50px;
  font-size: 24px;
}

.Hright {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Header ul {
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Header ul li {
  list-style: none;
  line-height: 50px;
  font-size: 20px;
  margin: 0 40px 0 40px;
  position: relative;
  color: #000;
}
.Header ul li em {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin: 0;
  transform: translate(-50%);
}
.Header ul li:hover em {
  animation: test 0.3s ease;
  border: 1px solid #000;
  width: 100%;
}
@keyframes test {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.search {
  position: relative;
  width: 35%;
}
.search input {
  border: none;
  height: 32px;
  width: 16vw;
  background-color: #e9e9e9;
  padding-left: 10px;
  border-radius: 20px;
}
.search input:focus {
  outline: none;
}
.search img {
  height: 18px;
  line-height: 18px;
  position: absolute;
  top: 50%;
  right: 11.2vw;
  transform: translateY(-50%);
  cursor: pointer;
}
.login {
  width: 10%;
}
</style>