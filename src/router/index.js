import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ "../pages/PageHome")
    },
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
    },
    {
      path: '/tile-map',
      name: 'tileMap',
      component: () => import(/* webpackChunkName: "tileMap" */ "../pages/PageTileMap")
    },
    {
      path: '/vector-file',
      name: 'vectorFile',
      component: () => import(/* webpackChunkName: "vectorFile" */ "../pages/PageVectorFile")
    },
    {
      path: '/overlays',
      name: 'overlays',
      component: () => import(/* webpackChunkName: "overlays" */ "../pages/PageOverlays")
    },,
    {
      path: '/multiple-overlays',
      name: 'multipleOverlays',
      component: () => import(/* webpackChunkName: "multipleOverlays" */ "../pages/PageMultipleOverlays")
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import(/* webpackChunkName: "popup" */ "../pages/PagePopup")
    },
    {
      path: '/vector-data',
      name: 'vectorData',
      component: () => import(/* webpackChunkName: "vectorData" */ "../pages/PageVectorDataManipulation")
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ "../pages/PageNotFound")
    }
  ],
  scrollBehavior() {
    document.querySelector('#app').scrollIntoView();
}
})

export default router