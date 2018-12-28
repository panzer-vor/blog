import devConfig from './dev';
import proConfig from './pro';
import testConfig from './test';
let config;
const ENV = process.env.NODE_ENV;
console.log(ENV);
switch (ENV) {
  case 'dev':
    config = devConfig;
    break;
  case 'prod':
    config = proConfig;
    break;
  case 'test':
    config = testConfig;
    break;
  default:
}

export const { dbConfig } = config;
export const { jwtConfig } = config;
export const { options } = config;