const moment = require('moment');
const pjson = require('../package.json');

module.exports = {
  status: '',
  startDate: '',
  getVersion() {
    return pjson.version;
  },
  getStartDate() {
    return this.startDate;
  },
  setStartDate() {
    this.startDate = moment().format('MMM D YYYY, h:mm:ss a');
  },
  getStatus() {
    return this.status;
  },
  setStatus(newStatus) {
    this.status = newStatus.trim();
  }
};
