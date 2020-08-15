# coding:utf-8

class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        i = 0
        j = len(height)-1
        max = min(height[i], height[j])*(j-i)
        while i != j:
            if height[i] < height[j]:
                i = i+1
            else:
                j = j-1
            tmp = min(height[i], height[j])*(j-i)
            if tmp > max:
                max = tmp
        return max


if __name__ == "__main__":
    r = Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    print(r)
