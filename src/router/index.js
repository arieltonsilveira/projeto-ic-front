import Vue from 'vue'
import Router from 'vue-router'
//import {isLogado,noLog} from './permicao';


Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('@/views/home/'),
        //beforeEnter: isLogado
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('@/views/login/'),
        //beforeEnter: noLog
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: () => import ('@/views/usuarios/'),
        //beforeEnter: isLogado
    },
    {
        path: '/clientes',
        name: 'clientes',
        component: () => import ('@/views/clientes/'),
        //beforeEnter: isLogado
    },  
    {
        path: '/instituicoes',
        name: 'instituicoes',
        component: () => import ('@/views/instituicao/'),
        //beforeEnter: isLogado
    },  
]

const router = new Router({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router