//路由代码
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Market',
        component: () => import('../views/Market.vue')
    },
    {
        path: '/User',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: '/UserInfo',
                component: () => import('../views/UserInfo.vue')
            },
            {
                path:'/UserCollection',
                component:()=>import('../views/UserCollection.vue')
            }
        ]
    },
    {
        path:'/public',
        component:()=>import('../views/Public.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router