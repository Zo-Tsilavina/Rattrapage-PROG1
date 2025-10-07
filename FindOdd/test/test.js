const { expect } = require('chai');
const { findOddRed } = require('../findOdd');

describe('findOddRed', () => {

    it('works for single-element arrays', () => {
        expect(findOddRed([7])).to.equal(7);
    });

    it('works for single-element arrays', () => {
        expect(findOddRed([0])).to.equal(0);
    });

    it('returns the lone odd-occurrence number for a short array', () => {
        expect(findOddRed([1,1,2])).to.equal(2);
    });

    it('handles longer arrays with repeated patterns', () => {
        const numbers = [1,2,2,3,3,3,4,3,3,3,2,2,1];
        expect(findOddRed(numbers)).to.equal(4);
    });

});
