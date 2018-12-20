import { httpConfig } from '@config'
import { message } from 'antd'
import axios from 'axios'


const { baseUri } = httpConfig

class Http {
  public static getInstance(): Http {
    if (Http.instance === null) {
      Http.instance = new Http()
    }
    return Http.instance
  }
  private static storeInstance: any = null
  private static reactHistory: any = null
  private static instance: Http | null = null
  constructor() {
    axios.defaults.baseURL = baseUri
    axios.interceptors.request.use(
      config => {
        config.headers = {
          "Authorization": `Bearer ${localStorage.getItem('admin_token')}`,
          'Content-Type':'application/json',
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    )
  }
  public async get(url: string, data?: object): Promise<any> {
    return this.httpRequest(url, 'get', data)
  }
  public async patch(url: string, data: object): Promise<any> {
    return this.httpRequest(url, 'patch', data)
  }
  public async post(url: string, data: object): Promise<any> {
    return this.httpRequest(url, 'post', data)
  }
  public async delete(url: string): Promise<any> {
    return this.httpRequest(url, 'delete')
  }
  public getRouterConfig(reactHistory: any): void {
    Http.reactHistory = reactHistory
  }
  public getReduxConfig(storeInstance: any): void {
    Http.storeInstance = storeInstance
  }
  private httpRequest(url: string, method: string, data?: object) {
    return new Promise((resolve, reject) => {
      const { storeInstance } = Http
      storeInstance({
        globalLoading: true,
        type: 'LOAD_DATA',
      })
      axios[method](url, data)
        .then((response: any) => {
          if(response.data.success === true) {
            resolve(response.data.records)
          } else {
            message.error(response.data.records)
            this.handleHttpCode(response.status, reject)
          }
        })
        .catch((err: Error) => {
          message.error(`${err}`)
          reject(err)
        })
        .finally(() => {
          storeInstance({
            globalLoading: false,
            type: 'LOAD_DATA',
          })
        })
    })
  }
  private handleHttpCode(code: number, reject: () => void) {
    const { reactHistory } = Http
    switch (code) {
      case 403:
        if (reactHistory) {
          reactHistory.push('/login')
        } else {
          window.location.href = '/login'
        }
        break
      default:
        reject()
    }
  }
}

export default Http.getInstance()