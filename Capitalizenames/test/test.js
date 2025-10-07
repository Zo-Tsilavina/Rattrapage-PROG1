const { expect } = require('chai');

const { capitalizeNamesRed } = require('../capitalizeNames');

describe('capitalizeNamesRed', () => {
    it("should capitalize ['jo', 'nelson', 'jurie']", () => {
        const input = ['jo', 'nelson', 'jurie'];
        const expected = ['Jo', 'Nelson', 'Jurie'];
        expect(capitalizeNamesRed(input)).to.deep.equal(expected);
    });

    it("should capitalize ['KARLY', 'DANIEL', 'KELSEY']", () => {
        const input = ['KARLY', 'DANIEL', 'KELSEY'];
        const expected = ['Karly', 'Daniel', 'Kelsey'];
        expect(capitalizeNamesRed(input)).to.deep.equal(expected);
    });
});
