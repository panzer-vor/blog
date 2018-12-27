import devConfig from './dev';
import proConfig from './pro';

let config;
if (process.env.NODE_ENV === 'dev') {
  config = devConfig;
}

export const { dbConfig } = config;
export const { jwtConfig } = config;