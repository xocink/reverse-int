module.exports = function reverse(n) {
    if (n < 0) {
        let value = String(n).split('').reverse();
        value.pop();
        value = value.join('');
        return +value;
    } else {
        let value = String(n).split('').reverse().join('');
        return +value;
    }
}
