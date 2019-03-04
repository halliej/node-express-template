const moment = require('moment');
const expect = require('expect');

const statistics = require('../util/statistics');
const pjson = require('../package.json');

describe('Statistics module unit test', () => {

  before(() => {
    statistics.setStartDate();
  });

  it('should get the current version', () => {
    const version = statistics.getVersion();
    expect(version).toEqual(pjson.version);
  });

  it('should get the start date', () => {
    const startDate = statistics.getStartDate();
    expect(startDate).toBeTruthy();
  });

  it('should set and get status', () => {
    const testStatus = '{"passed":0,"failed":0,"msgs":[]}';
    statistics.setStatus(testStatus);
    const newStatus = statistics.getStatus();
    expect(newStatus).toEqual(testStatus);
  });

});
