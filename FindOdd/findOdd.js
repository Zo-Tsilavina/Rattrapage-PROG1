function findOddRed(numbers) {
    return numbers.reduce((acc, value) => acc ^ value, 0);
}

module.exports = {
    findOddRed,
    findOdd: findOddRed,
};