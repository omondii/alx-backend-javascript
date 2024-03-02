const { expect } = require('chai');
const request = require('request');

describe('Tests for GET /cart/:id', () => {
    var id = 12
    it('Correct response when :id is  a number', (done) => {
        request.get(`http://localhost:7865/cart/${id}`, (error, response, body) => {
            if(response) {
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.equals(`Payment methods for cart: ${id}`);
                done()
            }
        });
    });
    it('Returns 404 when id isnot a number', (done) => {
        id = 'n'
        request.get('http://localhost:7865/cart/${id}', (error, response, body) => {
            if (response) {
                expect(response.statusCode).to.be.equal(404);
                done();
            }
        })
    })
});