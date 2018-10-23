import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AnotherVue from '@/components/AnotherVue'
import ViewMain from '@/view/main/App'
import ViewTest from '@/view/test/App'
import tomatoTime from '@/view/tomatoTime/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/tomatoTime',
      name: 'tomatoTime',
      component: tomatoTime
    },
    {
      path: '/another',
      name: 'Another',
      component: AnotherVue
    },
    {
      path: '/',
      name: 'main',
      component: ViewMain
    },
    {
      path: '/test',
      name: 'test',
      component: ViewTest
    }
  ]
})
