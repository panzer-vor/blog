const proConfig = {
  dbConfig: {
    host: 'cdb-3xqkbo6d.gz.tencentcdb.com',
    port: 10052,
    username: 'root',
    password: 'Xyk@0279',
    database: 'tanpopo',
    entities: ['dist/**/**/**.entity{.js}'],
  },
  jwtConfig: {
    secretOrKey: 'secretKey',
    signOptions: {
      expiresIn: 360000,
    },
  },
};
export default proConfig;