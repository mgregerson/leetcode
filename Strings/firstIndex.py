# Given two strings needle and haystack, return the index of the 
# first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

# Example 1:

# Input: haystack = "sadbutsad", needle = "sad"
# Output: 0
# Explanation: "sad" occurs at index 0 and 6.
# The first occurrence is at index 0, so we return 0.
# Example 2:

# Input: haystack = "leetcode", needle = "leeto"
# Output: -1
# Explanation: "leeto" did not occur in "leetcode", so we return -1.

class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """

        needle_len = len(needle)
        index = -1

        # we have to find the first occurrence of the first letter in needle
          # when we find this first letter, we check the letters afterwards to see if they match
        # if they match, return the first index

        for i in range(len(haystack)):
            if haystack[i] == needle[0]:
                # start a for loop
                start_index = i
                for n in range(i, needle_len):
                    if haystack[n] != needle[n]:
                        break
                    
                    
                    