const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package.json');

const DOC_TITLE = 'TODO API Documentation'

const swaggerOptions = {
  info: {
    title: DOC_TITLE,
    version: Pack.version,
  },
};

const swaggerDoc = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
]

module.exports = {
  swaggerDoc,
}