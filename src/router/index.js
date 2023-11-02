//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Library from '@/pages/Library';
import Details from '@/pages/Details';
import Bookshelf from '@/pages/Bookshelf';
import Login from '@/pages/Login';
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true,tshow:true},
        },
        {
            name:"library",
            path:"/library",
            component:Library,
            meta:{show:true,tshow:true},
            component: () => import('@/pages/Library'),
            children:[
                {
                    path:'details',
                    component:Details,
                }
            ]
        },
        {
            name:'bookshelf',
            path:"/bookshelf",
            component:Bookshelf,
            meta:{show:false,tshow:true},
        },
        {
            path: '/details',
            name: 'details',
            meta:{show:false,tshow:true},
            component: () => import('@/pages/Details'),
        }, 
        {
            path: '/login',
            name: 'login',
            meta:{show:false,tshow:true},
            component: () => import('@/pages/Login'),
        },
        {
            path: '/read',
            name: 'read',
            meta:{show:false,tshow:false},
            component: () => import('@/pages/Read'),
        },
        {
            path: '/register',
            name: 'register',
            meta:{show:false,tshow:true},
            component: () => import('@/pages/Register'),
        },
        //重定向，在项目跑起来的时候，访问/。立马定向到首页
        {
            path:"*",
            redirect:"/home"
        }
    ],
    mode:'history'
})