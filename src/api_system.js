import axios from 'axios'
const HTTP =
    axios.create({
        baseURL: process.env.VUE_APP_ROOT_API,
        responseType: "json",

        headers: {

            // Authorization: `Bearer ${store.getters.getterToken}`
        },

    })
export { HTTP }