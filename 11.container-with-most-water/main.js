/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    i = 0
    j = height.length - 1
    max = Math.min(height[i], height[j]) * (j - i)
    while (i != j) {
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
        tmp = Math.min(height[i], height[j]) * (j - i)
        if (tmp > max) {
            max = tmp
        }
    }
    return max
};

(function (main) {
    console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
}())