const supertest = require('supertest');
const api = supertest('http://localhost:7865');
const {expect} = require('chai');
const request = require('request')

describe('Homepage response', () => {
    it('correct status code', (done) => {
        api.get('/')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('Correct results', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            if(response) {
                expect(response.statusCode).to.equal(200);
                expect(response.statusMessage).to.equal('OK');
                expect(body).to.equals('Welcome to the payment system');
                done()
            }
        });
    });
})
