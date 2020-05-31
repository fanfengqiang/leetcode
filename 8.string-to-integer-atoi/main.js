/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    new_str = str.trim()
    num = 0
    flag = false
    const set1 = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    for (let i = 0; i < new_str.length; i++) {
        if ((i===0)&&(new_str[0] === '-')){
            flag = true
        } else if ((i===0)&&(new_str[0] === '+')) {
            flag = false
        } else if (set1.has(new_str[i])) {
            num = num * 10 + parseInt(new_str[i])
        } else {
            break
        }
        if (num > 2147483647) {
            if (flag) {
                num = 2147483648
            } else {
                num = 2147483647
            }
            break
        }
    }
    if (flag) {
        num = -num
    }
    return num
};

(function (main) {
    console.log(myAtoi("2147483649"))
}())