# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
# The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
# Example 1:

# Input: x = 4
# Output: 2
# Explanation: The square root of 4 is 2, so we return 2.
# Example 2:

# Input: x = 8
# Output: 2
# Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

def squareRoot(x):
    l = 0
    r = x

    while l <= r:
        mid = (l+r) // 2
         # if the square of the middle value is greater than x, move the right boundary to the left 
        if mid * mid > x:
            r -= 1
         # if the square of the middle value is smaller than x, move the left boundary to the right
        elif mid * mid < x:
            l -= 1
         # if the square of the middle value is equal to x, return the middle value
        else:
            return mid
    return l

         # return the left boundary as the answer, because the left boundary is the largest integer that is smaller than the square root of x