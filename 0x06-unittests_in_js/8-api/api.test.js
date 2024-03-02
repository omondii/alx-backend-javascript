const {expect} = require('chai');
const request = require('request')

describe('Homepage response', () => {
    it('Correct statusCode, results', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            if(response) {
                expect(response.statusCode).to.equal(200);
                expect(response.statusMessage).to.equal('OK');
                expect(body).to.equals('Welcome to the payment system');
                done()
            }
        });
    });
})
