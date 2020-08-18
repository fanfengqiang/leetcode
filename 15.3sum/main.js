/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let l = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) {
            continue
        }

        t = twoSum(nums.slice(i + 1,), -nums[i])
        for (let k = 0; k < t.length; k++) {
            l.push([nums[i], t[k][0], t[k][1]])
        }
    }
    return l
};

var twoSum = function (n, ss) {
    let ll = []
    for (let ii = 0, jj = n.length - 1; ii < jj;) {
        if (n[ii] + n[jj] < ss) {
            ii++
        } else if (n[ii] + n[jj] > ss) {
            jj--
        } else {
            a = n[ii]
            b = n[jj]
            ll.push([a, b])
            while (a == n[ii] && ii < jj) {
                ii++
            }
            while (b == n[jj] && ii < jj) {
                jj--
            }
        }
    }

    return ll
};

(function (main) {
    console.log(threeSum([-1, 0, 1, 2, -1, -4]))
}())