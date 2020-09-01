require('./services/mongo');
const hapiAuth = require('hapi-auth-jwt2');
const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');
const { authStrategy } = require('./utils/auth');

const init = async () => {

  const server = Hapi.server({
    port: process.env.API_PORT,
    host: process.env.API_HOST
  });

  server.route(routes);

  await server.register(hapiAuth);
  server.auth.strategy('jwt', 'jwt', authStrategy);

  server.auth.default('jwt');

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();