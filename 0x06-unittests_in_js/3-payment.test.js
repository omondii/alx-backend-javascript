const sinon = require('sinon');
const { expect } = require('chai');
const assert = require('assert')
const payment = require('./3-payment.js');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils.js');
const calculateNumber = require('./2-calcul_chai');

describe('sendPaymentRequestToApi', () => {
    it('Validate how func is called', () =>{
        // spy on Utils.calculateNumber
        const util = sinon.spy(Utils, 'calculateNumber');
        // Invoke sendPaymentRequestToApi
        const payment = sendPaymentRequestToApi(100, 20);
        // Assert utils.calculateNumber was called with correct arguments
        assert(util.calledOnceWithExactly('SUM', 100, 20));
        //assert.strictEqual(payment, 120)
    });
});