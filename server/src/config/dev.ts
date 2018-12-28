const devConfig = {
  dbConfig: {
    host: 'cdb-3xqkbo6d.gz.tencentcdb.com',
    port: 10052,
    username: 'root',
    password: 'Xyk@0279',
    database: 'tanpopo',
    entities: ['src/**/**/**.entity{.ts,.js}'],
  },
  jwtConfig: {
    secretOrKey: 'secretKey',
    signOptions: {
      expiresIn: 360000,
    },
  },
  options: {
    uri: 'api'
  }
};
export default devConfig;