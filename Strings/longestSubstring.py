# Given a string s, find the length of the longest substring without repeating characters.

# Example 1:

# Input: s = "abcabcbb"
# Output: 3 Explanation: The answer is "abc", with the length of 3.
# Example 2: Input: s = "bbbbb" Output: 1 Explanation: The answer is "b", with the length of 1.
# Example 3: Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke", with the length of 3.

# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

class Solution(object):
    def lengthOfLongestSubstring(s):
        """
        :type s: str
        :rtype: int
        """

        seen = {}
        # set each key to a letter in the string, and its value to the furthest right index of the letter
        left = 0
        max_len = 0

        for r in range(len(s)):
            # first, we want to set our character
            char = s[r]
            if char in seen and seen[char] >= left:
                left = seen[char]+1
            else:
                max_len = max(max_len, left+r+1)
            seen[char] = r
        return max_len
                
                
