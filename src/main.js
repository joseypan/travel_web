import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入reset.css
import 'styles/reset.css'
// 引入border.css
import 'styles/border.css'
// 引入fastclick
import fastClick from 'fastclick'
fastClick.attach(document.body)
// 引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
