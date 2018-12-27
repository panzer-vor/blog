const config: string = process.env.NODE_ENV || ''
console.log(config)
const globalConfig = JSON.parse(config) || {
  httpConfig: {}
}
export const { httpConfig } = globalConfig
