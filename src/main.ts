/*
 * @Author: Leslie
 * @Date: 2021-12-16 14:47:39
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 15:04:17
 * @FilePath: \platform-temp\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
// import "element-ui/lib/theme-chalk/index.css";
import '@/assets/scss/common.scss';
// import "@/assets/scss/variables.scss";
import '@/assets/scss/variables.scss';
import '@/assets/scss/element-variables.scss';
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
