import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入reset.css
import './assets/styles/reset.css'
// 引入border.css
import './assets/styles/border.css'
// 引入fastclick
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
