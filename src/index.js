require('./services/mongo');
const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');

const init = async () => {

  const server = Hapi.server({
    port: process.env.API_PORT,
    host: process.env.API_HOST
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();