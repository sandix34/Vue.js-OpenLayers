import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/change-view',
      name: 'changeView',
      component: () => import(/* webpackChunkName: "changeView" */ "../pages/PageChangeView")
    },
    {
      path: '/controles',
      name: 'controles',
      component: () => import(/* webpackChunkName: "controles" */ "../pages/PageControles")
    },
    {
      path: '/first-map',
      name: 'firstMap',
      component: () => import(/* webpackChunkName: "firstMap" */ "../pages/PageFirstMap")
    },
    {
      path: '/map-event',
      name: 'mapEvent',
      component: () => import(/* webpackChunkName: "mapEvent" */ "../pages/PageMapEvent")
    },
    {
      path: '/vector-geometry',
      name: 'vectorGeometry',
      component: () => import(/* webpackChunkName: "vectorGeometry" */ "../pages/PageVectorGeometry")
    },
    {
      path: '/projections',
      name: 'projections',
      component: () => import(/* webpackChunkName: "projections" */ "../pages/PageProjections")
    }
  ]
})

export default router