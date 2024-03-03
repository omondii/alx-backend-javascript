const {expect} = require('chai');
const request = require('request');
const server = require('./api');
const chai = require('chai');
const chaiHttp = require('chai-http');

after((done) =>{
    done();
    process.exit(1);
});

describe('Tests for /', () => {
    it('Index page displays correct message', (done) =>{
        request.get(`http://localhost:7865`, (error, response, request) => {
            if(response){
                expect(response.statusCode).to.be.equal(200);
                expect(response.body).to.be.equal('Welcome to the payment system');
            }
            done();
        });
    });
});


describe('Tests for GET /cart/:id', () => {
    var id = 12
    it('Correct response when :id is  a number', (done) => {
        request.get(`http://localhost:7865/cart/${id}`, (error, response, body) => {
            if(response) {
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.equals(`Payment methods for cart:${id}`);
            }
            done();
        });
    });
    it('Returns 404 when id isnot a number', (done) => {
        id = 'n'
        request.get('http://localhost:7865/cart/${id}', (error, response, body) => {
            if (response) {
                expect(response.statusCode).to.be.equal(404);
            }
            done();
        })
    })
});

describe('Tests for /available_payments', () => {
    it('Correct statusCode and response', (done) => {
        request.get(`http://localhost:7865/available_payments`, (error, response, body) => {
            if (response){
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.be.equal(`{payment_methods: {credit_cards: true,paypal: false}}`);
            }
            done();
        });
    });
});

describe('Tests for /login', () => {
    it('Correct statusCode and response when success', (done) => {
        request.post({ uri: 'http://localhost:7865/login', method: 'POST', json: { userName: "Brian" } }, (error, response, body) =>{
            if(response){
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.deep.equals('Welcome Brian');
            }
            done();
        });
    });

    it('Correct response and statuscode for no username', (done) => {
        request.post({ uri: 'http://localhost:7865/login', method: 'POST' }, (error, response, body) =>{
            if(response){
                expect(response.statusCode).to.be.equal(200);
                expect(body).to.deep.equals('Welcome undefined');
            }
            done();
        });
    });
});
