import './config';
import {expect} from 'chai';

describe('Browser', function() {
  it('has defined "Promise"', function() {
    expect(Promise).to.be.an('function');
  });

  it('"Promise" can resolve', function() {
    const value = 123;
    Promise.resolve(value)
      .then(function (res) {
        expect(res).to.be.equal(value);
      });
  });

  it('"Promise" can reject', function() {
    const value = 123;
    Promise.reject(value)
      .catch(function (res) {
        expect(res).to.be.equal(value);
      });
  });
});