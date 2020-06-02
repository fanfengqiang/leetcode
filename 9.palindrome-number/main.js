/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false
    }
    if (x <= 9) {
        return true
    }
    let y = 0
    do {
        let t = x % 10
        x = parseInt(x / 10)
        y = 10 * y + t
        // console.log(x, y)
        if (x === y || y === parseInt(x / 10)) {
            return true
        }
    } while (x > 0)
    return false
};

(function main() {
    console.log(isPalindrome(1001))
}())