import Vue from 'vue'
import Router from 'vue-router'
import hello from 'components/hello'
import swiper from 'components/swiper'
import vux from 'components/vux'
import spider from 'components/spider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spider',
      name: 'spider',
      component: spider
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/vux',
      name: 'vux',
      component: vux
    }
  ]
})
