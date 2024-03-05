//路由代码
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        component:()=>import('../views/Public.vue')
    },
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
                path: '',
                component: () => import('../views/UserInfo.vue')
            },
            {
                path: '/UserInfo',
                component: () => import('../views/UserInfo.vue')
            },
            {
                path:'/UserCollection',
                component:()=>import('../views/UserCollection.vue')
            },
            {
                path: '/UserSetting',
                component: () => import('../views/UserSetting.vue')
            }
        ]
    },
    {
        path:'/public',
        component:()=>import('../views/Public.vue')
    },
    {
        path:'/login',
        component:()=>import('../views/Login.vue')
    },
    {
        path: '/test',
        component: () => import('../views/test.vue')
    },
    {
        path:'/CardInfo',
        component:()=>import('../views/CardInfo.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router