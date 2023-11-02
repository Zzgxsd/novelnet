<template>
  <div class="outer">
    <div class="header"></div>
    <div class="main">
      <div class="Lmain">
        <img :src="require(`@/assets/images/${imgUrl}`)" alt="" />
        <div class="nr">
          <h3>{{ booktitle }}</h3>
          <p class="p1">
            <span>{{ Statusindex }}</span
            ><span>{{ classificationindex }}</span>
          </p>
          <p class="p2">
            <span>{{ Numwords }}万字</span><span>{{ Numreads }}万人在读</span>
          </p>
          <button @click="read">开始阅读</button>
          <button @click="collect(id)">加入书架</button>
        </div>
      </div>
      <div class="Rmain">
        <div class="authornr">
          <img src="@/assets/renwu-01.svg" alt="" />
          <p>作者: {{ bookauthor }}</p>
        </div>
      </div>
    </div>
    <div class="btm">
      <h3>作品简介</h3>
      <p>{{ bookjj }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      booktitle: this.$route.query.booktitle,
      imgUrl: this.$route.query.imgUrl,
      bookauthor: this.$route.query.bookauthor,
      bookjj: this.$route.query.bookjj,
      Statusindex: this.$route.query.Statusindex,
      classificationindex: this.$route.query.classificationindex,
      Numwords: this.$route.query.Numwords,
      Numreads: this.$route.query.Numreads,
    };
  },
  methods: {
    read() {
      this.$router.replace({
        name: "read",
        query:{
          id:this.id
        }
      });
    },
    collect() {
      // 触发事件,事件名不能重复
      setTimeout(() => {
        this.$bus.$emit("getBookid", this.id);
      }, 20);

      this.$router.replace({
        name: "bookshelf",
      });
    },
  },
  mounted() {
  },
  watch: {
  },
};
</script>

<style scoped lang="less">
.outer {
  height: 100vh;
  .header {
    background-color: #f6f6f6;
    height: 10vh;
  }
  .main {
    padding: 6vh 6vw;
    display: flex;
    .Lmain {
      display: flex;
      width: 65%;
      img {
        width: 230px;
      }
      .nr {
        button {
          margin-left: 40px;
          margin-top: 60px;
          appearance: none;
          background-color: transparent;
          border: 0.125em solid #1a1a1a;
          border-radius: 0.9375em;
          box-sizing: border-box;
          color: #3b3b3b;
          cursor: pointer;
          display: inline-block;
          font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 16px;
          font-weight: 600;
          line-height: normal;
          min-height: 3.75em;
          min-width: 0;
          outline: none;
          padding: 1em 2.3em;
          text-align: center;
          text-decoration: none;
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          will-change: transform;
        }

        button:disabled {
          pointer-events: none;
        }

        button:hover {
          color: #fff;
          background-color: #ff8700;
          border: 0.125em solid #ff8700;
          box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
          transform: translateY(-2px);
        }

        button:active {
          box-shadow: none;
          transform: translateY(0);
        }
        h3 {
          font-size: 28px;
          color: #393733;
          padding: 20px 40px;
        }
        .p1 {
          font-size: 18px;
          margin: 0 34px;
          span {
            margin: 0px 6px;
            padding: 0 6px;
            border: 1px solid #fdae31;
            color: #fdae31;
          }
          span:last-child {
            border: 1px solid #ccc;
            color: #ccc;
          }
        }
        .p2 {
          margin: 20px 34px;
          color: #393733;
          span {
            padding: 0px 6px;
            font-size: 24px;
            font-weight: bold;
          }
          span:first-child {
            border-right: 2px solid #ccc;
          }
        }
      }
    }
    .Rmain {
      border-left: 1px solid #e5e5e5;
      width: 45%;
      position: relative;
      .authornr {
        // width: 100%;
        img {
          width: 100px;
          position: absolute;
          left: 50%;
          top: 30%;
          transform: translate(-50%, -50%);
        }
        p {
          position: absolute;
          left: 50%;
          top: 60%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
  .btm {
    padding: 6vh 6vw;
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      text-indent: 2em;
      color: #9d9d9d;
      flex-wrap: wrap;
    }
  }
}
</style>