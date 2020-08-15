/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    m = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    num = 0
    for (i = 0; i < s.length; i++) {
        if (m[s[i]] >= m[s[Math.min(s.length - 1, i + 1)]]) {
            num = num + m[s[i]]
        } else {
            num = num - m[s[i]]
        }
    }
    return num
};

(function (main) {
    console.log(romanToInt("D"))
}())