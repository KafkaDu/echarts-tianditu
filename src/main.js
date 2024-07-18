/*
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2024-07-18 09:43:40
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2024-07-18 10:32:03
 * @FilePath: \echarts-tianditu\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './main.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
