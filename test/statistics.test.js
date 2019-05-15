const moment = require('moment');

const statistics = require('../util/statistics');
const pjson = require('../package.json');

describe('Statistics module unit test', () => {

  beforeAll(() => {
    statistics.setStartDate();
  });

  test('should get the current version', () => {
    const version = statistics.getVersion();
    expect(version).toEqual(pjson.version);
  });

  test('should get the start date', () => {
    const startDate = statistics.getStartDate();
    expect(startDate).toBeTruthy();
  });

  test('should set and get status', () => {
    const testStatus = '{"passed":0,"failed":0,"msgs":[]}';
    statistics.setStatus(testStatus);
    const newStatus = statistics.getStatus();
    expect(newStatus).toEqual(testStatus);
  });

});
