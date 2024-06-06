const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Set up the spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log the correct total for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
