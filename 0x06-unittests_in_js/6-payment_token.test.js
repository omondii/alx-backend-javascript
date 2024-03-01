/**
 * Test suite for asynchronous function getPaymentTokenFromApi
 */
const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromApi = require('./6-payment_token.js')
chai.use(require('chai-as-promised'));

describe('Asynchronous for a test function', () => {
    it('Resolve if success is true', (done) => {
        expect(getPaymentTokenFromApi(true)).to.eventually.equal({data: 'Successful response from the API' });
        done()
    })
    it('Reject if success is false', (done) => {
        expect(getPaymentTokenFromApi(false)).to.be.rejected;
        done()
    });
});