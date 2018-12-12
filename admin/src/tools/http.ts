import { httpConfig } from '@config'
import { message } from 'antd'
const { baseUri } = httpConfig

interface IHttpRecord extends Response {
  success: boolean
  records: any
}

class Http {
  public static getInstance(): Http {
    if (Http.instance === null) {
      Http.instance = new Http()
    }
    return Http.instance
  }
  private static reactHistory: any = null
  private static instance: Http | null = null
  public async get(url: string, data?: object) {
    return this.httpRequest(url, 'GET', data)
  }
  public getConfig(reactHistory: any): void {
    Http.reactHistory = reactHistory
  }
  private httpRequest(url: string, method: string, data?: object) {
    let uri = url
    const options: any = {
      mode: 'cors',
    }
    switch (method) {
      case 'GET':
        const getData = data || {}
        Object.keys(getData).forEach((v, i) => {
          const getSlice = `${v}=${getData[v]}`
          i ? uri += `&${getSlice}` : uri += `?${getSlice}`
        })
        break
      case 'POST':
      case 'PATCH':
      case 'PUT':
      case 'DELETE':
        options.headers = {
          'Content-Type': 'application/json',
        }
        options.body = data
        break
      default: 
        throw new Error(`暂无该提交方式: ${method}`)
    }
    return new Promise((resolve, reject) => {
      fetch(baseUri + url, options)
        .then((response: IHttpRecord) => {
          return response.json()
        })
        .then((res: IHttpRecord) => {
          if(res.success === true) {
            resolve(res.records.data)
          } else {
            message.error(res.records.data)
            this.handleHttpCode(res.status, reject)
          }
        })
        .catch((err: Error) => {
          message.error(err)
          reject(err)
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