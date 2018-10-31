// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from '@/router/index'
import Qs from 'qs'
import axios from 'axios'
import api from '@/api'
import store from './store/index'
import '@/styles/index.css'//全局css
import './permission.js';
import globaljs from './utils/global.js';
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.prototype.$api=api;
Vue.prototype.$qs=Qs;
Vue.use(globaljs);
/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  template: '<App/>',
  components: {App}
})
