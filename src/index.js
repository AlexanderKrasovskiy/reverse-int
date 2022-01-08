module.exports = function reverse (n) {
    let result = n;
    if (n < 0) result *= -1;
    return +result.toString().split('').reverse().join('');
}
