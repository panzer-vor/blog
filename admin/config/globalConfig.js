
const devConfig = require('./dev.config')

let globalConfig;
if (process.env.NODE_ENV === 'development') {
  globalConfig = devConfig;
}
module.exports = globalConfig