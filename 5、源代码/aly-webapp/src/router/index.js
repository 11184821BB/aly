import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexAll from '../page/IndexAll'
import CloudAll from '../page/CloudAll'
import ControllerAll from '../page/ControllerAll'
import StoreAll from '../page/StoreAll'
import PlaceAll from '../page/PlaceAll'
import MyAll from '../page/MyAll'
import ShopcartAll from '../page/ShopcartAll'
import DomainAll from '../page/DomainAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: IndexAll
    },
    {
      path: '/index',
      name: 'IndexAll',
      component: IndexAll
    },
    {
      path: '/cloud',
      name: 'CloudAll',
      component: CloudAll
    },
    {
      path: '/controller',
      name: 'ControllerAll',
      component: ControllerAll
    },
    {
      path: '/store',
      name: 'StoreAll',
      component: StoreAll
    },
    {
      path: '/place',
      name: 'PlaceAll',
      component: PlaceAll
    },
    {
      path: '/my',
      name: 'MyAll',
      component: MyAll
    },
    {
      path: '/cart',
      name: 'ShopcartAll',
      component: ShopcartAll
    },
    {
      path: '/domain',
      name: 'DomainAll',
      component: DomainAll
    }
  ]
})
