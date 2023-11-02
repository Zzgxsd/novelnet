<template>
  <div>
    <Brand></Brand>
    <div class="main">
      <Recommend :Timgs="Timgs" :imgs="imgs"></Recommend>
      <Information></Information>
    </div>
    <Author></Author>
    <Boutique></Boutique>
  </div>
</template>

<script>
import Brand from '@/pages/Home/Brand'
import Recommend from '@/pages/Home/Recommend'
import Information from '@/pages/Home/Information'
import Author from '@/pages/Home/Author'
import Boutique from '@/pages/Home/Boutique'

export default {
  data(){
    return{
      Timgs: {
        id: 1,
        img: require("./Recommend/images/10001.png"),
        booktitle: "特工易冷",
        author: "骁骑校",
      },
      imgs: [
        {
          id: 1,
          img: require("./Recommend/images/10002.png"),
          booktitle: "凡骨",
          author: "壹更大师",
        },
        {
          id: 2,
          img: require("./Recommend/images/10003.png"),
          booktitle: "从前有座镇妖塔",
          author: "徐二家的猫",
        },
        {
          id: 3,
          img: require("./Recommend/images/10004.png"),
          booktitle: "小山河",
          author: "北斗二娘",
        },
        {
          id: 4,
          img: require("./Recommend/images/10005.png"),
          booktitle: "咬一口甜梨",
          author: "春不语",
        },
        {
          id: 5,
          img: require("./Recommend/images/10006.png"),
          booktitle: "原来你是这样的林秘书",
          author: "曲不知",
        },
        {
          id: 6,
          img: require("./Recommend/images/10007.png"),
          booktitle: "原来月亮先动心",
          author: "三奈果子",
        },
        {
          id: 7,
          img: require("./Recommend/images/10008.png"),
          booktitle: "皇家金牌县令",
          author: "板面王仔",
        },
        {
          id: 8,
          img: require("./Recommend/images/10009.png"),
          booktitle: "宫女奋斗日常",
          author: "月下幻影",
        },
      ],
    }
  },
  components:{
    Brand,
    Recommend,
    Information,
    Author,
    Boutique,
  }
}
</script>

<style scoped>
.main{
  display: flex;
}
</style>