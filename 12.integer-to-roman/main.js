/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    str1 = ""
    while (num > 0) {
        if (num >= 1000) {
            s = Math.floor(num / 1000)
            num = num % 1000
            str1 = str1 + roma(s, "M", "", "")
        }
        if (num >= 100) {
            s = Math.floor(num / 100)
            num = num % 100
            str1 = str1 + roma(s, "C", "D", "M")
        }
        if (num >= 10) {
            s = Math.floor(num / 10)
            num = num % 10
            str1 = str1 + roma(s, "X", "L", "C")
        }
        if (num > 0) {
            str1 = str1 + roma(num, "I", "V", "X")
            num = 0
        }
    }
    return str1
};

function roma(s, a, b, c) {
    str2 = ""
    if (s <= 3) {
        for (i = 0; i < s; i++) {
            str2 = str2 + a
        }
    } else if (s == 4) {
        str2 = str2 + a + b
    } else if (s == 5) {
        str2 = str2 + b
    } else if (s < 9) {
        str2 = str2 + b
        for (i = 0; i < s - 5; i++) {
            str2 = str2 + a
        }
    } else if (s == 9) {
        str2 = str2 + a + c
    }

    return str2
}

(function (main) {
    console.log(intToRoman(51))
}())