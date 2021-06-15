import store from '../store/index'
export  function isLogado(to, from, next) {
    if (store.getters.logTrue) {
        next()
    } else {
        next('/login')
    }
}
export  function noLog(to, from, next) {
    if (!store.getters.logTrue) {
        next()
    } else {
        next('/')
    }
}