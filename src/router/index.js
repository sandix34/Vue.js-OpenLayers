import Vue from 'vue'
import Router from 'vue-router'
import ChangeView from '@/components/ChangeView'
import controles from '@/components/controles'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/change-view',
            name: 'ChangeView',
            component: ChangeView

        },
        {
            path: '/controles',
            name: 'controles',
            component: controles

        }
    ]
})

export default router