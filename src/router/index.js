import Vue from 'vue'
import Router from 'vue-router'
import ChangeView from '@/pages/PageChangeView'
import Controles from '@/pages/PageControles'
import FirstMap from '@/pages/PageFirstMap'
import MapEvent from '@/pages/PageMapEvent'
import VectorGeometry from '@/pages/PageVectorGeometry'
import Projections from '@/pages/PageProjections'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/change-view',
      name: 'changeView',
      component: ChangeView
    },
    {
      path: '/controles',
      name: 'controles',
      component: Controles
    },
    {
      path: '/first-map',
      name: 'firstMap',
      component: FirstMap
    },
    {
      path: '/map-event',
      name: 'mapEvent',
      component: MapEvent
    },
    {
      path: '/vector-geometry',
      name: 'vectorGeometry',
      component: VectorGeometry
    },
    {
      path: '/projections',
      name: 'projections',
      component: Projections
    }
  ]
})

export default router