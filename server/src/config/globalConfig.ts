import devConfig from './dev';
import proConfig from './pro';
let config;
if (process.env.NODE_ENV === 'dev') {
  config = devConfig;
} else {
  config = proConfig;

}
if (process.env.NODE_ENV === 'prod') {
  config = proConfig;
}

export const { dbConfig } = config;
export const { jwtConfig } = config;