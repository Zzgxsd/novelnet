import Vue from 'vue'
import App from './App.vue'

// 创建一个空的 Vue 实例作为事件中心。
window.eventBus = new Vue();

Vue.config.productionTip = false
import router from '@/router'

new Vue({
  render: h => h(App),
  router,
  // beforeCreate中模板未解析，且this是vm
  beforeCreate() {
    Vue.prototype.$bus = this	//安装全局事件总线
  }
}).$mount('#app')
