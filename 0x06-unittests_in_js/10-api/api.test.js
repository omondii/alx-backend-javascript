const {expect} = require('chai');
const { response } = require('express');
const request = require('request');

describe('Tests for /available_payments', () => {
    it('Correct statusCode and response', (done) => {
        request.get(`https://localhost:7865/available_payments`, (error, response, body) => {
            if (response){
                expect(response.statusCode).to.be.equal(200);
                expect(response.body).to.be.equal(`{payment_methods: {credit_cards: true,paypal: false}}`);
                done();
            }
        });
    });
});

describe('Tests for /login', () => {
    it('Correct statusCode and response', (done) => {
        const userName = 'test';
        request.post(`https://localhost"7865/login`)
            .send({ userName })
            .end((error, response) => {
                if (response){
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.deep.equal(`Welcome ${userName}`)
                }
            })
    })
})