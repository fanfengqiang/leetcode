/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    pre = ""
    if (strs.length == 0) {
        return ""
    }
    minLen = strs[0].length
    for (i = 0; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length
        }
    }
    for (i = 0; i < minLen; i++) {
        b = true
        for (j = 0; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                b = false
            }
        }
        if (b) {
            pre = pre + strs[0][i]
        } else {
            break
        }
    }
    return pre
};

(function (main) {
    console.log(longestCommonPrefix(["flower", "flow", "flight"]))
}())