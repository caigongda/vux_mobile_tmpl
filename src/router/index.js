import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import navrouter from './navbar'
Vue.use(Router)
const routers=[
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    }].concat(navrouter)
export default new Router({
	mode: 'history',
  routes: routers
})
