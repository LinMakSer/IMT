var baseCurrencyUs = 27;

function roundTwoDecimal(amount) {
    return Math.round(amount * 100) / 100;
};

module.exports.converterToUa = function (currency) {
    return roundTwoDecimal(currency * baseCurrencyUs);
};

module.exports.converterToUs = function (currency) {
    return roundTwoDecimal(currency / baseCurrencyUs);
};

// console.log(converterToUs(1000));
// console.log(converterToUa(1000));