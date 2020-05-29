
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}
    for (var i = 0; i < nums.length; i++) {
        dis = target - nums[i]
        if (map[dis] == undefined) {
            map[nums[i]] = i
        } else {
            return [map[dis], i]
        }
    }
    return []
};
(function main() {
    console.log(twoSum([2, 7, 9, 11], 14));
}());