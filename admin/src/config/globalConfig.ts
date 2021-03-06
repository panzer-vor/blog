import devConfig from './dev.conf'
import proConfig from './pro.conf'
import testConfig from './test.conf'
const ENV = process.env.NODE_ENV

let globalConfig = {
  httpConfig: {
    baseUri: '',
  },
  options: {
    env: '',
    routerUri: '',
  }
}
switch (ENV) {
  case 'test':
    globalConfig = testConfig
    break
  case 'production':
    globalConfig = proConfig
    break
  case 'development':
    globalConfig = devConfig
    break
  default:
    
}
export const { httpConfig, options } = globalConfig
