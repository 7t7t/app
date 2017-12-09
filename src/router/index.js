import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
// import http from '@/components/http'
import HelloWorld from '@/components/HelloWorld'
import spider from '@/components/spider'
import vux from '@/components/vux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spider',
      name: 'spider',
      component: spider
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/vux',
      name: 'vux',
      component: vux
    }
  ]
})
