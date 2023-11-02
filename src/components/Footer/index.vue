<template>
  <div class="Footer">
    <div class="Fleft">
      <div class="logotitle">
        <img
          src="./image/6771602_book shelf_books_education_learning_school_icon.svg"
          alt=""
        />
        <h1>501小说网</h1>
      </div>
      <p><a href="#">《501小说网用户协议》</a></p>
      <p><a href="#">《501小说网隐私政策》</a></p>
      <h5>©中山电竞501有限公司</h5>
    </div>
    <div class="Fmain">
      <div class="Mtop">
        <p><a href="#">粤ICP备12310023号-8</a></p>
        <p><a href="#">粤公网安备10239571081024号</a></p>
        <p><a href="#">粤ICP证 粤B2-2131312号</a></p>
        <p><a href="#">网络文化经营许可证:粤网文[2023]0604-234号</a></p>
      </div>
      <div class="Mdown">
        <p>广告投放:<a href="#">www.501xiaoshuogg.com</a></p>
        <p>不良信息举报:<a href="#">www.501xiaoshuojb.com</a></p>
        <p>意见建议:<a href="#">www.501xiaoshuojy.com</a></p>
      </div>
    </div>
    <div class="Fright">
      <img src="./image/wxewm.png" alt="">
      <h5>打开微信扫码关注501小说网公众号</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Footer {
  background-color: #f1f1f1;
  height: 50vh;
  display: flex;
}
p{
  font-size: 14px;
}
p a{
  font-size: 14px;
  color: #000000;
}
p a:hover {
  color: #ff5f00;
}
.Fleft {
  width: 30%;
  height: 100%;
}
.Fleft img {
  width: 50px;
}
.Fleft p {
  padding: 10px 0 0 65px;
}

.Fleft h5 {
  padding: 75px 0 0 65px;
}
.logotitle {
  display: flex;
  padding: 40px 0 0 65px;
}
.logotitle h1 {
  line-height: 50px;
  font-size: 24px;
}

.Fmain {
  width: 40%;
  height: 100%;
}
.Fmain .Mtop {
  padding: 50px 0 0 65px;
}
.Fmain .Mtop p{
  padding-top: 10px;
}
.Fmain .Mdown{
  padding: 50px 0 0 65px;
}
.Fmain .Mdown p{
  padding-top: 10px;
}

.Fright {
  width: 30%;
  height: 100%;
  position: relative;
}
.Fright img{
  width: 100px;
  position: absolute;
  top: 60%;
  left: 23%;
}
.Fright h5{
  font-size: 14px;
  font-weight: 200;
  position: absolute;
  top: 90%;
  left: 10%;
}
</style>