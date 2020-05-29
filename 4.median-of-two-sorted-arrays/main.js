/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    sum = nums1.length + nums2.length
    if (sum % 2 == 1) {
        return findNums(nums1, nums2, parseInt(sum / 2) + 1) / 1.0
    } else {
        return (findNums(nums1, nums2, parseInt(sum / 2) + 1) + findNums(nums1, nums2, parseInt(sum / 2))) / 2.0
    }
};

function findNums(l1, l2, k) {
    //console.log("s:", l1, l2, k)
    index1 = Math.min(parseInt(k / 2) - 1, l1.length - 1)
    index2 = Math.min(parseInt(k / 2) - 1, l2.length - 1)
    if (l1.length == 0) {
        return l2[k - 1]
    }
    if (l2.length == 0) {
        return l1[k - 1]
    }
    if (k == 1) {
        return Math.min(l1[0], l2[0])
    }
    if (l1[index1] < l2[index2]) {
        return findNums(l1.slice(index1 + 1), l2, k - index1 - 1)
    } else {
        return findNums(l1, l2.slice(index2 + 1), k - index2 - 1)
    }
}

(function main() {
    console.log("hello word!")
    console.log(findMedianSortedArrays([1], [2, 3, 4, 5, 6]))
}())