/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) {
        return s
    }
    new_s = ""
    n = s.length
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < n; j++) {
            u = parseInt(j / (numRows - 1))
            us = u * 2 * (numRows - 1)
            if (j % (numRows - 1) == 0) {
                k = us + i
                if (k < n) {
                    new_s = new_s + s[k]
                }
            } else if (i + (j % (numRows - 1)) == numRows - 1) {
                k = us + numRows + (numRows - 2 - i)
                if (k < n) {
                    new_s = new_s + s[k]
                }
            }
        }
    }
    return new_s
};

(function main() {
    console.log(convert("LEETCODEISHIRING", 4))
}())