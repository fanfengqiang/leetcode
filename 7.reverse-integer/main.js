/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    flag =false
    if (x < 0) {
        flag = true
        x = -x
    }
    y = 0
    do {
        n = x % 10
        x = parseInt(x / 10)
        y = y * 10 + n
    } while (x > 0)
    if (flag === true) {
        y = -y

    }
    if ((y < -2147483647) || (y > 2147483647)) {
        return 0
    }
    return y
};

(function main() {
    console.log(reverse(3456678956785))

}())