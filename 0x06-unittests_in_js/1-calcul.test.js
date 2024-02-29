/**
 * Test suite for 1-calcul.js
 * 
 */
const assert = require('assert');
const calc = require('./1-calcul.js');

describe('CalculateNumber based on passed operation', () => {
    describe('Sum', () => {
        it('positive numbers', () => {
            assert.equal(calc('SUM', 3, 4), 7);
        });
        it('Float Numbers', () => {
            assert.equal(calc('SUM', 3.4, 5.6), 9);
        });
        it("A float & A positive", () =>{
            assert.equal(calc('SUM', 4.8, 6), 11);
        });
        it('Negative float numbers', () => {
            assert.equal(calc('SUM', -3.2, -2.7), -6);
        });
        it('Result for 0s', () => {
            assert.equal(calc('SUM', 0.4, 0.3), 0);
        });
        it('Rounding negative 0s', () => {
            assert.equal(calc('SUM', -0.5, -0), -0);
        });
    });
    describe('SUBTRACT', () => {
        it('positive numbers', () => {
            assert.equal(calc('SUBTRACT', 8, 4), 4);
        });
        it('Float Numbers', () => {
            assert.equal(calc('SUBTRACT', 4.4, 5.6), -2);
        });
        it("A float & A positive", () =>{
            assert.equal(calc('SUBTRACT', 6, 4.8), 1);
        });
        it('Negative float numbers', () => {
            assert.equal(calc('SUBTRACT', -3.2, -2.7), -0);
        });
        it('Result for 0s', () => {
            assert.equal(calc('SUBTRACT', 0.4, 0.3), 0);
        });
        it('Rounding negative 0s', () => {
            assert.equal(calc('SUBTRACT', -0.5, -0), -0);
        });
    });
    describe('DIVISION', () => {
        it('positive numbers', () => {
            assert.equal(calc('DIVIDE', 8, 4), 2);
        });
        it('Float Numbers', () => {
            assert.equal(calc('DIVIDE', 4.4, 2.0), 2);
        });
        it("A float & A positive", () =>{
            assert.equal(calc('DIVIDE', 6, 2.8), 2);
        });
        it('Negative float numbers', () => {
            assert.equal(calc('DIVIDE', -12.2, -2.7), 4);
        });
        it('Error for 0 division', () => {
            assert.equal(calc('DIVIDE', 0.4, -0.3), 'Error');
        });
        it('Rounding negative 0s', () => {
            assert.equal(calc('DIVIDE', -11.6, 3), -4);
        });
    });
});