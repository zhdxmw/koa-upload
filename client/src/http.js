import axios from 'axios'
import config from './config'
const http = axios.create({
    baseURL: config.api,
    timeout: 20000
})
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default http
