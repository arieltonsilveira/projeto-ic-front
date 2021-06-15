import Vue from 'vue'
import Router from 'vue-router'
import {isLogado,noLog} from './permicao';


Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('@/views/home/'),
        beforeEnter: isLogado
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('@/views/login/'),
        beforeEnter: noLog
    },
    {
        path: '/questionarios/:id',
        name: 'questionarios',
        component: () => import ('@/views/questionarios/'),
        beforeEnter: isLogado
    },
    {
        path: '/pergunta/:id',
        name: 'pergunta',
        component: () => import ('@/views/pergunta/'),
        beforeEnter: isLogado
    },
    {
        path: '/quiz/:id',
        name: 'quiz',
        component: () => import ('@/views/quiz/'),
        beforeEnter: isLogado
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: () => import ('@/views/usuarios/'),
        beforeEnter: isLogado
    },
    {
        path: '/clientes',
        name: 'clientes',
        component: () => import ('@/views/clientes/'),
        beforeEnter: isLogado
    },
    {
        path: '/orcamentos',
        name: 'orcamentos',
        component: () => import ('@/views/orcamento/'),
        beforeEnter: isLogado
    },
    {
        path: '/novo/orcamentos/:id',
        name: 'cardorcamento',
        component: () => import ('@/views/orcamento/cadOrcamento'),
        beforeEnter: isLogado
    },
    
]

const router = new Router({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router