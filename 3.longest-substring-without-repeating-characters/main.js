/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let rk = 0
    let nums = 0
    let caps = {}
    for (let i = 0; i < s.length; i++) {
        if (i != 0) {
            delete (caps[s[i - 1]])
        }
        for (; ;) {
            if ((rk < s.length) && (caps[s[rk]] == undefined)) {
                caps[s[rk]] = 1
                rk++
            } else {
                break
            }
        }
        nums = Math.max(nums, rk - i)
    }
    return nums
};

(function main() {
    console.log(lengthOfLongestSubstring("a"))
}());