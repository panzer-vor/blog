import axios from 'axios'
import config from '@config'
import { message } from 'antd'
axios.defaults.timeout = 30000
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(config => {a
  const token = localStorage.getItem('admin_token')
  if (token && location.pathname.indexOf('login') === -1) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = token;
    console.log('interceptors config=',config)
  } else {
    window.location.href('/login')
  }
  return config
}, error => {
  return Promise.reject(error)
})

class Http {
  axiosRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
      axios[method](url, data)
        .then(res => {
          if (res.data && res.data.success) {
            resolve(res.data.records)
          } else {
            message.error(err)
            reject()
          }
        })
        .catch(err => {
          message.error(err)
        })
    })
  }
  get = (url) => {
    return this.axiosRequest('get', url)
  }
  patch = (url, data) => {
    return this.axiosRequest('patch', url, data)
  }
  post = (url, data) => {
    return this.axiosRequest('post', url, data)
  }
  delete = (url) => {
    return this.axiosRequest('delete', url, data)
  }
}

export default new Http();