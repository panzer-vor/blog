const devConfig = {
  dbConfig: {
    host: 'tanpopo.cc',
    port: 3306,
    username: 'root',
    password: 'Xyk@0279',
    database: 'blog_test',
    entities: ['src/**/**/**.entity{.ts,.js}'],
  },
  jwtConfig: {
    secretOrKey: 'secretKey',
    signOptions: {
      expiresIn: 360000,
    },
  },
};
export default devConfig;