
const config: string = process.env.NODE_ENV || ''
const globalConfig = JSON.parse(config)
export const { httpConfig } = globalConfig
