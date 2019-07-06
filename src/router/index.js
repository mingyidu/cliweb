import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowSome from '@/components/ShowSome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gui',
      name: 'gui',
      component: gui
    },
    {
      path: '/show',
      name: 'ShowSome',
      component: ShowSome
    }
  ]
})
