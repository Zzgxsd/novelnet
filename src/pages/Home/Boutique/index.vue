<template>
  <div class="outer">
    <div class="tab">
      <ul class="titleul">
        <li
          class="titleli"
          @click="change(index)"
          :class="currentIndex == index ? 'active' : ''"
          :key="item.id"
          v-for="(item, index) in list"
        >
          {{ item.title }}
        </li>
      </ul>
      <div
        class="main"
        :class="currentIndex == index ? 'current' : ''"
        :key="item.id"
        v-for="(item, index) in list"
      >
        <ul class="bul">
          <h4>阅读热门榜单></h4>
          <p class="t">仅展示原创作品,统计截至时间为每日24:00</p>
          <li
            @mouseover="bchange(itemson.id)"
            class="bli"
            v-for="itemson in item.books"
            :key="itemson.id"
          >
            <p class="ids">{{ itemson.id }}</p>
            <p class="ts">{{ itemson.booktitle }}</p>
            <p :class="bookIndex == itemson.id ? 'activejj' : ''" class="jj">
              {{ itemson.bookjj }}
            </p>
            <p :class="bookIndex == itemson.id ? 'activezz' : ''" class="zz">
              {{ itemson.bookauthor }}
            </p>
            <img
              :class="bookIndex == itemson.id ? 'activebook' : ''"
              :src="itemson.imgUrl"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, //表示当前选项卡
      bookIndex: 1, //当前的排行榜
      list: [
        {
          id: 1, //用来代表每一个对象
          title: "男频精选",
          books: [
            {
              id: 1,
              imgUrl: require("./images/10001.png"),
              booktitle: "特工易冷",
              bookauthor: "骁骑校",
              bookjj:
                "（原名特工易冷）玉梅饭店的厨子黄皮虎是个油腻猥琐的中年大叔，喜欢喝酒抽烟盘串，还经常尾随女学生，没人知道他的真实身份是众多美女心中的一代男神、退役特工易冷，隐于市井只为默默守护已经不认识自己的女儿。",
            },
            {
              id: 2,
              imgUrl: require("./images/10002.png"),
              booktitle: "凡骨",
              bookauthor: "壹更大师",
              bookjj:
                "世间灵骨，共分四品。 一品，天灵骨。二品，金灵骨。三品，玄灵骨。四品，白灵骨。 余者，皆为凡骨，无缘修行。 一介凡骨许太平，誓要向这修行界证明，凡骨亦能斩妖，凡骨亦能除魔，凡骨亦能登仙！",
            },
            {
              id: 3,
              imgUrl: require("./images/10008.png"),
              booktitle: "皇家金牌县令",
              bookauthor: "面板王仔",
              bookjj:
                "种田＋轻松娱乐＋穿越】 方正一穿越至大景朝成为一名小县令。 花费七年时间打造了属于自己的世外桃源，本想做个土皇帝逍遥一生。 景和十三年，大景皇帝微服私访，偶然间误入桃源县.... 皇帝初入县内满心震惊！ 各种新奇之物，让人目不暇接。 “抽水马桶为何物？竟然如此方便！",
            },
            {
              id: 4,
              imgUrl: require("./images/10003.png"),
              booktitle: "从前有座镇妖关",
              bookauthor: "徐二家的猫",
              bookjj:
                "从前，有这样一座关。 从前，有这样一群人。 这座关，寸寸染血。 这些人，不死不还。 只为在尸山血海中，弥留之际，转身时，能见那身后闪烁的万家灯火，岁岁平安。",
            },
            {
              id: 5,
              imgUrl: require("./images/10010.png"),
              booktitle: "赌石：开局天降横财两个亿",
              bookauthor: "浪迹天涯带着刀",
              bookjj:
                "《都市+赌石+太子+兵王+神豪+复仇+权谋+爽文+御姐》 人无横财不富，马无夜草不肥。 快递送来价值连城的龙石种帝王绿貔貅手把件，银行短信通知到账两个亿。 但叶青丝毫没有天降横财的兴奋，因为这是师父在求救。 为了报仇，他义无反顾闯进了赌石之都，因为赌石而产生的恩仇，需要靠赌石来了结。 但赌石从来都是一刀天堂，一刀地狱。 石头不骗人，骗人的都是人。",
            },
          ],
        },
        {
          id: 2, //用来代表每一个对象
          title: "女频精选",
          books: [
            {
              id: 1,
              imgUrl: require("./images/10004.png"),
              booktitle: "小山河",
              bookauthor: "北斗二娘",
              bookjj:
                "已签实体出版】 迟夏初到专案组，骆寻强烈建议她转岗。 这实习生细胳膊细腿又木讷，跟睡不醒似的，哪点适合专案组？倒是很适合去宣传科！ 细胳膊细腿默不吭声，凡事来一句：骆队，破案要紧。 骆寻气不打一处来，觉得专案组要完。",
            },
            {
              id: 2,
              imgUrl: require("./images/10005.png"),
              booktitle: "咬一口甜梨",
              bookauthor: "春不语",
              bookjj:
                "已签约出版〉白切黑清冷医生vs小心机甜妹，很甜无虐。 楚渊第一次见寄养在他家的阮梨是在医院，弱柳扶风的病美人，艳若桃李，惊为天人。 她眸里水光盈盈，葱葱玉指拽着他的衣服，“楚医生，我怕痛，你轻点。",
            },
            {
              id: 3,
              imgUrl: require("./images/10006.png"),
              booktitle: "原来你是这样的林秘书",
              bookauthor: "曲不知",
              bookjj:
                "【双洁、甜宠、一见钟情、总裁&秘书】 　　半年辞退了三个秘书，作为第四个，林悦让贺远无比满意。 　　只是这个秘书动不动就相亲，给贺远留下了恨嫁的印象。 　　但…… 　　林秘书好像是个霉运体质，不是遇见妈宝就是奇葩。 　　然后……林秘书哭了。 　　半年相了七次，哭了七次。 　　贺远实在看不下去了，帮她擦干眼泪，“要不，你跟我结婚？” ",
            },
            {
              id: 4,
              imgUrl: require("./images/10007.png"),
              booktitle: "原来月亮先动心",
              bookauthor: "三奈果子",
              bookjj:
                "【已签约出版】 原名：《喝醉后，我错撩了闺蜜的小叔》 【苏撩+甜宠+教授+七岁年龄差+校园+救赎】 【苏撩腹黑小叔X古灵精怪少女】 江落是十足的手控，为了一张手照，搭讪了一位帅哥，不料事后发现，对方居然是她闺蜜的小叔！ 江落腰板挺直，站姿乖巧：“小、小叔好。” …… 多年后，南大突然传出生物学系的高岭之花傅教授已经结婚的谣言。",
            },
            {
              id: 5,
              imgUrl: require("./images/10009.png"),
              booktitle: "宫女奋斗日常",
              bookauthor: "月下幻影",
              bookjj:
                "凌欢冰肌玉骨貌若天仙，却无心权势，一心想着出宫。最终母子二人皆不得善终。 重来一次，她的目标是养好崽崽自己当太后。 大女主宫斗文。 女主心狠手辣智商在线。 情节很爽。",
            },
          ],
        },
      ],
    };
  },
  methods: {
    change(index) {
      this.currentIndex = index;
    },
    bchange(index) {
      this.bookIndex = index;
    },
  },

};
</script>

<style scoped lang="less">
.outer {
  height: 100vh;
  .tab {
    .titleul {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      .titleli {
        margin: 0 4vw;
      }
      .titleli.active {
        color: #ff5f00;
      }
    }
    div.current {
      display: block;
    }
    div {
      display: none;
    }
    .main {
      margin: 2rem 5rem;
      padding: 1rem 0;
      border-radius: 10px;
      background-image: linear-gradient(rgb(255, 230, 200), rgb(255, 255, 255));
      .bul {
        h4 {
          padding: 20px;
          font-size: 24px;
          font-weight: bold;
        }
        .t {
          padding: 0 0 0 20px;
          font-size: 20px;
        }
        .bli {
          cursor: pointer;
          background-color: #ffffff;
          margin: 10px;
          padding: 5px 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          .ids {
            font-size: 24px;
            font-weight: bold;
            color: #ff5f00;
            margin-right: 20px;
          }
          .ts {
            font-size: 20px;
            font-weight: 400;
            // margin-right: 20vw;
          }
          img {
            width: 155px;
            height: 200px;
            margin: 20px 0;
            border-radius: 10px;
            position: relative;
            display: none;
          }
          .jj {
            font-size: 14px;
            margin-left: 5vw;
            width: 20vw;
            display: none;
            color: #b5b5b5;
          }
          .activejj {
            display: block;
          }
          .zz {
            font-size: 18px;
            font-weight: bold;
            color: #2c2c2c;
            margin: 0 20px;
            display: none;
          }
          .activezz {
            display: block;
          }
          .activebook {
            display: block;
          }
        }
      }
    }
  }
}
</style>