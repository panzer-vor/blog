const proConfig = {
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
      expiresIn: 7200000,
    },
  },
  options: {
    uri: 'api',
    port: 7002,
  }
};
export default proConfig;