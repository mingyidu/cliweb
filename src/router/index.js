import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowSome from '@/components/ShowSome'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show',
      name: 'ShowSome',
      component: ShowSome
    },
    {
      path: '/ggser',
      name: 'User',
      component: User
    }
  ]
})
