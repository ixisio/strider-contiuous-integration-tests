
var expect = require('chai').expect;
var addition = require('../index.js'); 

describe('addition()', function () {
  it('should add 4+7 correctly', function (done) {
    expect(addition(4, 7)).to.equal(11);
    done();
  });
});