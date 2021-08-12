import axios from 'axios'
import Vue from 'vue'
const http  = axios.create({
    baseURL: 'http://toinscrito.com.br/api/',
    // baseURL: 'http://127.0.0.1:8000/api/',
    responseType: "json",
    headers:{
        //Authorization: `Bearer ${localStorage.getItem('token')}`
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
        
    }
})

Vue.prototype.$http = http;
export default http;

