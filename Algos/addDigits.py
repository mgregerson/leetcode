# Given an integer num, repeatedly add all its digits 
# until the result has only one digit, and return it.

# Example 1:

# Input: num = 38
# Output: 2
# Explanation: The process is
# 38 --> 3 + 8 --> 11
# 11 --> 1 + 1 --> 2 
# Since 2 has only one digit, return it.
# Example 2:

# Input: num = 0
# Output: 0

class Solution(object):
    def addDigits(num):
        """
        :type num: int
        :rtype: int
        """

        # we can simply iterate across num until len of the arr of num is 1 num

        curr_num = num

        while curr_num > 9:
          temp = curr_num # 11
          curr_num = 0 
          for digit in str(temp): 
             curr_num += int(digit)  # 1 + 1 = 2

        return curr_num
