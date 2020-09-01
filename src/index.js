require('./services/mongo');
const { server } = require('./services/server');
const routes = require('./routes/routes');
const { authStrategy, hapiAuth } = require('./utils/auth');
const apiDoc = require('./utils/docs');

const init = async () => {
  server.route(routes);

  await server.register(hapiAuth);
  server.auth.strategy('jwt', 'jwt', authStrategy);
  server.auth.default('jwt');

  await server.register(apiDoc.swaggerDoc);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();