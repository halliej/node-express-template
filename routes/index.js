/* eslint no-console: 0 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to template!');
});

router.get('/getTest', (req, res) => {
  res.send('getTest');
});

router.post('/postTest', (req, res) => {
  res.send('postTest');
});

router.get('/*', (req, res) => {
  res.status(404).send('Invalid endpoint');
});

module.exports = router;
