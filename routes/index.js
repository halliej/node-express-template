/* eslint no-console: 0 */
const log4js = require( "log4js" );
const statistics = require('../util/statistics');
log4js.configure( "./config/log4js.json" );
const logger = log4js.getLogger( "routes" );

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  logger.info('root')
  res.send('Welcome to template!');
});

router.get('/getTest', (req, res) => {
  logger.info('getTest');
  res.send('getTest');
});

router.get('/errorTest', () => {
  logger.info('errorTest');
  throw new Error('Yikes');
});

router.post('/postTest', (req, res) => {
  logger.info('postTest');
  res.send('postTest');
});

router.get('/status', (req, res) => {
  const status = statistics.getStatus();
  logger.info(`status: ${status}`);
  res.send(`${status}`);
});

router.get('/startDate', (req, res) => {
  const startDate = statistics.getStartDate();
  logger.info(`startDate: ${startDate}`);
  res.send(`${startDate}`);
});

router.get('/version', (req, res) => {
  const version = statistics.getVersion();
  logger.info(`version`);
  res.send(`${version}`);
});

router.get('/healthcheck', (req, res) => {
  logger.info('healthcheck');
  res.send('healthcheck');
});

router.get('/*', (req, res) => {
  logger.info('Invalid endpoint');
  res.status(404).send('Invalid endpoint');
});

module.exports = router;
