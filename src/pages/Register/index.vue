<template>
  <div class="outer">
    <div class="container">
      <div class="main">
        <!-- 整个注册盒子 -->
        <div class="loginbox">
          <!-- 左侧的注册盒子 -->
          <div class="loginbox-in">
            <div class="userbox">
              <span class="iconfont"
                ><img src="../../assets/font/yonghuming.svg" alt="" srcset=""
              /></span>
              <input
                class="user"
                id="user"
                v-model="name"
                placeholder="用户名"
              />
            </div>
            <br />
            <div class="pwdbox">
              <span class="iconfont"
                ><img src="../../assets/font/mima.svg" alt="" srcset=""
              /></span>
              <input
                class="pwd"
                id="password"
                v-model="pwd"
                type="password"
                placeholder="密码"
              />
            </div>
            <br />
            <div class="pwdbox">
              <span class="iconfont"
                ><img src="../../assets/font/mima.svg" alt="" srcset=""
              /></span>
              <input
                class="pwd"
                id="re_password"
                v-model="repwd"
                type="password"
                placeholder="确认密码"
              />
            </div>

            <br />
            <router-link type="primary" class="register_btn" to="/login">
              Login
            </router-link>
            <button type="primary" class="login_btn" @click="ok">确认</button>
          </div>

          <!-- 右侧的注册盒子 -->
          <div class="background">
            <div class="title">Welcome to 501 novelnet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      //已注册用户列表
      user_list: [],
      name: "",
      pwd: "",
      repwd: "",
    };
  },
  watch: {
    user_list: {
      handler(newValue) {
        localStorage.setItem("login", JSON.stringify(newValue));
        // console.log(newValue);
      },
      deep: true,
    },
  },
  mounted() {
    this.user_list = JSON.parse(localStorage.getItem("login"));
    // console.log(this.user_list);
  },
  methods: {
    ok() {
      var flag = 1;
      //如果用户名已存在，则需要换一个用户名
      if (this.user_list) {
        this.user_list.forEach((item) => {
          if (item.username == this.name) {
            alert("用户已存在,请换一个用户名");
            flag = 0;
          }
        });
      }
      //如果用户名不存在，则继续判断
      if (flag) {
        //判断两次输入的密码是否一致，如果密码不一致，则需要重新输入
        if (this.pwd != this.repwd) {
          alert("两次输入的密码不一致,请重新输入");
        } else {
          var item = {};
          //获取到用户名
          item.username = this.name;
          //获取到密码
          item.password = this.pwd;
          //存储到用户列表
          this.user_list.push(item);

          localStorage.setItem("login", JSON.stringify(this.user_list));

          alert("注册成功");

          this.$router.push({
            path: "/login",
            query: {
              list: this.user_list,
            },
          });
        }
      }
    },
  },
};
</script>
  
  <style scoped>
.outer {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #93b5cf;
  max-width: 100%;
}
.loginbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4e655d;
}
.loginbox-in {
  background-color: #ffffff;
  width: 240px;
}
.userbox {
  margin-top: 120px;
  height: 30px;
  width: 230px;
  display: flex;
  margin-left: 25px;
}
.pwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
}

.background {
  width: 570px;
  background-image: url("../../assets/bj.png");
  background-size: 100% 100%;
  font-family: sans-serif;
}
.title {
  margin-top: 320px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #93b5cf;
}
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.uesr-text {
  position: left;
}
input {
  outline-style: none;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
  background-color: transparent;
  height: 20px;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
/* input::-webkit-input-placeholder{
      color:#E9E9E9;
   } */
input:focus {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
input:hover {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}

input:-webkit-autofill {
  /* 修改默认背景框的颜色 */
  box-shadow: 0 0 0px 1000px #89ab9e inset !important;
  /* 修改默认字体的颜色 */
  -webkit-text-fill-color: #445b53;
}

input:-webkit-autofill::first-line {
  /* 修改默认字体的大小 */
  font-size: 15px;
  /* 修改默认字体的样式 */
  font-weight: bold;
}
.log-box {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 190px;
  margin-left: 30px;
  color: #4e655d;
  margin-top: -5px;
  align-items: center;
}
.log-box-text {
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
}
.login_btn {
  background-color: #5f8276; /* Green */
  border: none;
  color: #fafafa;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  border-radius: 20px;
  outline: none;
  margin-top: 40px;
  margin-left: 90px;
}
.login_btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  background-color: #0b5137;
  transition: all 0.2s ease-in;
}

.warn {
  margin-top: 60px;
  /* margin-right:120px; */
  margin-left: -120px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
}

.register_btn {
  background-color: transparent; /* Green */
  border: none;
  text-decoration: none;
  font-size: 12px;
  /* border-radius: 20px;   */
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
  display: flex;
  margin-left: 25px;
  outline: none;
}
.register_btn:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>