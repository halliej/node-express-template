/* eslint no-console: 0 */
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
//What's my name?
const pjson = require('./package.json');
const appName = pjson.name;

const statistics = require('./util/statistics');
statistics.setStatus('ok');

const log4js = require( "log4js" );
log4js.configure( "./config/log4js.json" );
const logger = log4js.getLogger( "app" );

const app = express();
//apply security middleware
app.use(helmet());
//load routes
const indexRoutes = require('./routes/index');
//Determine port
const port = process.env.PORT || 3000;
//load middleware
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(helmet());
app.use(cors());
app.use(indexRoutes);
//Add a default route error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(`Express error: ${err}`);
});
//Go to work
app.listen(3000, () => {
  logger.info(`${appName} running on port ${port}.`);
});

//Uncomment in develpment only
// process.on('uncaughtException', (error) => {
//   console.log(`Uncaught exception: ${error}`);
//   logger.error(`Uncaught exception: ${error}`);
// });

module.exports = { app };
