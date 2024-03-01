/*
 * Test file for 0-calcul.js
*/
const assert = require('assert');
const calc = require('./0-calcul.js');

describe('Calculate Float Numbers', () => {
    it('Returns sum of numbers Rounded of', () => {
        assert.strictEqual(calc(3.7, 4.2), 8);
    });

    it('Rounds of for negative numbers', () => {
        assert.strictEqual(calc(-1, -2.1), -3);
    });

    it('Test for 0s',() =>{
        assert.strictEqual(calc(0,0), 0);
    });

    it('Whole number addition', () => {
        assert.equal(calc(4, 5), 9);
    });
    it('Rounded first number', () => {
        assert.equal(calc(0.8, 2), 3);
    })
});
