/* eslint no-console: 0 */
const log4js = require( "log4js" );
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

router.get('/errorTest', (req, res, next) => {
  logger.info('errorTest');
  throw new Error('Yikes');
});

router.post('/postTest', (req, res) => {
  logger.info('postTest');
  res.send('postTest');
});

router.get('/*', (req, res) => {
  logger.info('Invalid endpoint');
  res.status(404).send('Invalid endpoint');
});

module.exports = router;
