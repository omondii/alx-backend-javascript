/**
 * Test suite for 1-calcul.js
 * 
 */
const { expect } = require('chai');
const calc = require('./2-calcul_chai.js');

describe('CalculateNumber based on passed operation', () => {
    describe('Sum', () => {
        it('positive numbers', () => {
            expect(calc('SUM', 3, 4)).to.equal(7);
        });
        it('Float Numbers', () => {
            expect(calc('SUM', 3.4, 5.6)).to.equal(9);
        });
        it("A float & A positive", () =>{
            expect(calc('SUM', 4.8, 6)).to.equal(11);
        });
        it('Negative float numbers', () => {
            expect(calc('SUM', -3.2, -2.7)).to.equal(-6);
        });
        it('Result for 0s', () => {
            expect(calc('SUM', 0.4, 0.3)).to.equal(0);
        });
        it('Rounding negative 0s', () => {
            expect(calc('SUM', -0.5, -0)).to.equal(-0);
        });
    });
    describe('SUBTRACT', () => {
        it('positive numbers', () => {
            expect(calc('SUBTRACT', 8, 4)).to.equal(4);
        });
        it('Float Numbers', () => {
            expect(calc('SUBTRACT', 4.4, 5.6)).to.equal(-2);
        });
        it("A float & A positive", () =>{
            expect(calc('SUBTRACT', 6, 4.8)).to.equal(1);
        });
        it('Negative float numbers', () => {
            expect(calc('SUBTRACT', -3.2, -2.7)).to.equal(-0);
        });
        it('Result for 0s', () => {
            expect(calc('SUBTRACT', 0.4, 0.3)).to.equal(0);
        });
        it('Rounding negative 0s', () => {
            expect(calc('SUBTRACT', -0.6, -0)).to.equal(-1);
        });
    });
    describe('DIVISION', () => {
        it('positive numbers', () => {
            expect(calc('DIVIDE', 8, 4)).to.equal(2);
        });
        it('Float Numbers', () => {
            expect(calc('DIVIDE', 4.4, 2.0)).to.equal(2);
        });
        it("A float & A positive", () =>{
            expect(calc('DIVIDE', 6, 2.8)).to.equal(2);
        });
        it('Negative float numbers', () => {
            expect(calc('DIVIDE', -12.2, -2.7)).to.equal(4);
        });
        it('Error for 0 division', () => {
            expect(calc('DIVIDE', 0.4, -0.3)).to.equal('Error');
        });
        it('Rounding negative 0s', () => {
            expect(calc('DIVIDE', -11.6, 3)).to.equal(4);
        });
    });
});