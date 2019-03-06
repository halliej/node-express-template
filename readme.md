
 # Starter template for node/express apps

This template is a good starting place for a node/express application. It provides the basic structure for your application as well as modules for testing, security and logging.   

**Test**

The template provides unit test which you should modify and extend to properly test your code. You can run the test suite using the `npm test` command. To run coverage test use `npm run coverage`. 

**Logging**

The template uses the log4js module for logging. The logs are in the `logs` folder. The log files are:

+ access.log - logs all request received by the server
+ application.log - general purpose logs messages provided by your application
+ error.log - logs messages with `error` level

You can modify logging behavior by making changes to the config/log4js.json file. See the log4js [documentation](https://log4js-node.github.io/log4js-node/) for details.

**Statistics**

The template provides a `statistics` module that can be used to get information about the application. The default values provided are:

+ status - your application can get or set appropriate status messages here.
    + `getStatus()` 
    + `setStatus(newStatus)`
+ startDate - this is the date/time the application was (re)started.
    + `getStartDate()` 
    + `setStartDate()` 
+ version - this is the version number as specified in your package.json file 
    + `getVersion()`

Feel free to add any other type of data that you may want to provide.

**NOTE:** External endpoints are available to provide outside access to these values (see below).

**API**

API endpoints are defined in the `routes/index.js` file. Basic endpoints are provided for testing purposes. You should modify this file to create your own endpoints.

The statistics endpoints are:

+ `/status`
+ `/startDate`
+ `/version`