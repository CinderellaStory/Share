import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import my from '@/components/my'
import shop from '@/components/shop'
import boutique from '@/components/boutique'
import { Button } from 'vant'
import { Search } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Router)
Vue.use(Button)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/boutique',
      component: boutique
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/my',
      component: my
    }
  ]
})
