'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542979132310_2683';

  // add your config here
  config.middleware = [];
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  return config;
};
