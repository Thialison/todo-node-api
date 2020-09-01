const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: process.env.API_PORT,
  host: process.env.API_HOST
});

module.exports = {
  server
}