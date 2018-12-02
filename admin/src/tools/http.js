import axios from 'axios'
import config from '@config'
import { message } from 'antd'
axios.defaults.timeout = 30000
axios.defaults.baseURL = config.baseURL
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