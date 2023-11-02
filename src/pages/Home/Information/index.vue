<template>
  <div class="outer">
    <p class="title">最新资讯</p>
    <ul>
      <li v-for="(item, index) in news" :key="index">
        {{ item.newcontent }}
      </li>
    </ul>
    <p class="more"><a href="#">更多</a><span>></span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          newcontent: "中国作家“深入生活、扎根人民”新时代文学实践点落户义乌",
        },
        {
          id: 2,
          newcontent: "2020-2022年文学改编影视作品蓝皮书",
        },
        {
          id: 3,
          newcontent: "黄河安澜——首届甘肃生态文学创作计划启动",
        },
        {
          id: 4,
          newcontent: "新的文化使命——从“第二个结合”看努力建设中华民族现代文明",
        },
        {
          id: 5,
          newcontent: "海外市场订阅用户超1.5亿，中国网络文学“圈粉”世界",
        },
        {
          id: 6,
          newcontent: "“新芒影视文学计划”焕新发布 推动文学与影视共生共创",
        },
        {
          id: 7,
          newcontent: "杨志鹏《汉江绝唱》：三千里汉江与中国时代的风云变幻",
        },
        {
          id: 8,
          newcontent: "张宏森：学习贯彻党章党规 锤炼品格实干担当 以党的二十大精神引领新时代文学再上新台阶",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.outer {
  padding: 3vw 2vw;
  .title {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 2vh;
  }
  ul {
    padding-top: 2vh;
    li {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 2vh;
      width: 20vw;
      white-space: nowrap; /* 禁止换行 */
      overflow: hidden; /* 溢出隐藏 */
      text-overflow: ellipsis; /* 显示省略号 */
      cursor: pointer;
      span {
        margin-left: 1vw;
        line-height: 28px;
        font-size: 20px;
        font-weight: bold;
      }
    }
    li:hover{
      color: #ff5f00;
    }
  }
  .more {
    cursor: pointer;
    a {
      color: #bcbcbc;
      font-size: 16px;
    }
    span {
      font-size: 16px;
      color: #bcbcbc;
    }
  }
}
</style>