# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some 
# (can be none) of the characters without disturbing the relative positions of the remaining characters. 
# (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

# Example 1:

# Input: s = "abc", t = "ahbgdc"
# Output: true
# Example 2:

# Input: s = "axc", t = "ahbgdc"
# Output: false


# We know that we need to compare each letter in the smaller string to the larger string
# If the larger string has this letter, set the currLetter to the index of that letter.
# 
#
#
#


####    curr_index_s = 1, curr_index_t = 6, valid = 'a'


class Solution(object):
    def isSubsequence(s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        curr_index_s = 0
        curr_index_t = 0
        valid_s_letters = ''

        while curr_index_t < len(t) and curr_index_s < len(s):
          if s[curr_index_s] == t[curr_index_t]:
              valid_s_letters += s[curr_index_s]
              curr_index_s += 1
          curr_index_t += 1
        if valid_s_letters == s:
            return True
        else:
          return False