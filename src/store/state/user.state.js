import { HTTP } from '@/api_system'
export default {
    state: {
        carregando: false,
        filtro:{},
        user: {},
        access_token: ''
    },
    mutations: {
        setCarregando(state,val){
             state.carregando = val
        },
        setUser(state, val) {
            state.user = val
        },
        setToken(state, val) {
            state.access_token = val
        },
        setFiltro(state, val) {
            state.filtro = val
        }
    },
    actions: {
        setCarregando({ commit },val){
            commit('setCarregando',val)
        },
        login({ commit }, form) {
            return new Promise((resolve, reject) => {
                HTTP.post('/auth/login', form).then(response => {
                    commit('setToken', response.data.access_token)

                    resolve(true)
                }).catch(error => {
                    console.log(error);
                    reject(false)
                })
            })
        },
        sendToken({ commit, getters }) {
            return new Promise((resolve, reject) => {
                HTTP.post('me', { token: getters.tokenUser }).then(response => {
                    commit('setUser', response.data)
                    resolve(response.data)
                }).catch(error => {
                    console.log(error);
                    reject(false)
                })
            })
        },
        register({ commit }, form) {
            console.log(commit)
            return new Promise((resolve, reject) => {
                HTTP.post('user', form).then(response => {
                    console.log(response);
                    resolve(true)
                }).catch(error => {
                    console.log(error);
                    reject(false)
                })
            })
        },
        logout({ commit }, form) {
            return new Promise((resolve, reject) => {
                HTTP.post('logout', form).then(response => {
                    console.log(response);
                    commit('setToken', '')
                    resolve(true)
                }).catch(error => {
                    console.log(error);
                    reject(false)
                })
            })
        },
    },
    getters: {
        getCarregando(state){
            return state.carregando;
        },
        logTrue(state) {
            return state.access_token != ''
        },
        tokenUser(state) {
            return state.access_token
        },
        getDadosUser(state) {
            return state.user
        },
        getFiltro(state){
            return state.filtro;
        },
    }
}