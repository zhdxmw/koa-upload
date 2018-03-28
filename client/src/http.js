import axios from 'axios'
import config from './config'
const http = axios.create({
    baseURL: config.api,
    timeout: 20000
})
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

http.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token')
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})
export default http
