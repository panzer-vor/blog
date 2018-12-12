
const config: string = process.env.NODE_ENV || ''
const globalConfig = JSON.parse(config)
console.log(globalConfig)
export const { httpConfig } = globalConfig
