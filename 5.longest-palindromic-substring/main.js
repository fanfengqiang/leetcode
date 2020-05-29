/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    n = s.length
    var p = new Array();  //先声明一维
    for (var i = 0; i < n; i++) {    //一维长度为i,i为变量，可以根据实际情况改变
        p[i] = new Array();  //声明二维，每一个一维数组里面的一个元素都是一个数组；
        for (var j = 0; j < n; j++) {   //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
            p[i][j] = false;    //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
        }
    }
    index1 = 0
    index2 = 0
    nums = 0
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if ((i == j) || (j == i + 1 && p[i][i] && s[i] == s[j]) || (j < n - 1 && i > 0 && s[i] == s[j] && p[i - 1][j + 1])) {
                p[i][j] = true
                if (i - j > nums) {
                    nums = i - j
                    index1 = j
                    index2 = i
                }
            }
        }
    }
    return s.substring(index1, index2 + 1)
};

(function main() {
    console.log(longestPalindrome(""))
}())