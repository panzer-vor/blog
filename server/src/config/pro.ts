const devConfig = {
  dbConfig: {
    type: 'mysql',
    port: 3306,
    host: 'tanpopo.cc',
    username: 'root',
    password: 'Xyk@0279',
    database: 'bolg_test',
    entities: ['src/**/**/**.entity{.ts,.js}'],
    synchronize: true,
  },
};
export default devConfig;