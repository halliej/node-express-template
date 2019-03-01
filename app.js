/* eslint no-console: 0 */
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const indexRoutes = require('./routes/index');
const app = express();
//apply security middleware
app.use(helmet());

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(indexRoutes);

app.listen(3000, () => {
  console.log(`Template running on port ${port}.`);
});

process.on('uncaughtException', (error) => {
  console.log(`Uncaught exception: ${error}`);
});

module.exports = { app };
