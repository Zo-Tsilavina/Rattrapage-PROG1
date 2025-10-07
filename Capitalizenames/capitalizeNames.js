function capitalizeNamesRed(names) {

    return names.reduce((acc, name) => {

        if (name.length === 0) {
            acc.push('');
            return acc;
        }

        const lowerCased = name.toLowerCase();
        const capitalized = lowerCased[0].toUpperCase() + lowerCased.slice(1);
        acc.push(capitalized);
        return acc;
    }, []);
}

module.exports = {
    capitalizeNamesRed,
    capitalizeNames: capitalizeNamesRed,
};
