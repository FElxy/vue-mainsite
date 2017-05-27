import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/hello',
      name: 'Hello',
      component: resolve => require(['@/components/Hello.vue'], resolve)
    },{
      path: '/canvas',
      name: 'canvas',
      component: resolve => require(['@/views/canvas/index.vue'], resolve),
      children:[{
        path: '/canvas/basic',
        name: 'canvasBasic',
        component: resolve => require(['@/views/canvas/basic.vue'], resolve)
      }]
    }
  ]
})
