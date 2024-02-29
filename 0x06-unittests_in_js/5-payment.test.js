/**
 * Using hooks to call functions before executing all or one tests in a suite
 */
const payment = require('./5-payment.js');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('Call sendPaymentRequestToApi with hooks', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        consoleSpy.restore();
    });

    it('Should log 120 -> called with 100 & 20', () => {
        const result = sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    })
    it('should log 20 -> called with 10, 10', () => {
        const result = sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});