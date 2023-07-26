# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of 
# the squares of its digits.
# Repeat the process until the number equals 1 (where it will stay), or 
# it loops endlessly in a cycle which does not include 1.
# Those numbers for which this process ends in 1 are happy.
# Return true if n is a happy number, and false if not.

# Example 1:

# Input: n = 19
# Output: true
# Explanation:
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1

class Solution(object):
    def isHappy(n):
        """
        :type n: int
        :rtype: bool
        """
        digits = [int(d) for d in str(n)]
        # we know that we have to keep adding the number together until they reach 1 digit
        # we know that we should run a while loop
        total = 0
        while (len(digits) > 1):
            # iterate across the numbers
            total = 0
            for num in digits:
                total += num**2
            digits = [int(d) for d in str(total)]
        
        return total