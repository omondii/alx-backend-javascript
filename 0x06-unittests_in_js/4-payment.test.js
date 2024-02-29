const sinon = require('sinon');
const { expect } = require('chai');
const payment = require('./3-payment.js');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
    it('Stub calculateNumber to always return 10', () =>{
        const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
        const calcSpy = sinon.spy(console, 'log');
        expect(calcSpy.calledWith('The total is: 10')).to.be.false;
    });
});
