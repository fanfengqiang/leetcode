# coding: utf-8

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = 0
        for i in range(len(s)):
            hash = set()
            if s[i] not in hash:
                k = i
                while True:
                    if k < len(s) and (s[k] not in hash) :
                        hash.add(s[k])
                        k = k + 1
                    else:
                        m = max(m, k-i)
                        hash.remove(s[i])
                        break
        return m


if __name__ == "__main__":
    s = Solution()
    print("r:",s.lengthOfLongestSubstring('pwwkew'))
