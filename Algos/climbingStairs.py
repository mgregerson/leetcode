# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Example 1:

# Input: n = 2
# Output: 2
# Explanation: There are two ways to climb to the top.
# 1. 1 step + 1 step
# 2. 2 steps
# Example 2:

# Input: n = 3
# Output: 3
# Explanation: There are three ways to climb to the top.
# 1. 1 step + 1 step + 1 step
# 2. 1 step + 2 steps
# 3. 2 steps + 1 step

# n = 4

'''

1 1 1 1
1 1 2
1 2 1
2 1 1
2 2 

'''

# n = 5
'''

1 1 1 1 1
1 1 1 2
1 1 2 1
1 2 1 1
2 1 1 1
1 2 2
2 1 2

'''

# n = 6
'''

1 1 1 1 1 1
1 1 1 1 2
1 1 1 2 1
1 1 2 1 1
1 2 1 1 1
2 1 1 1 1
1 1 2 2
1 2 1 2
2 1 1 2
2 1 2 1
2 2 1 1
2 2 2

'''

# n = 9
'''

1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 2
1 1 1 1 1 1 2 1
1 1 1 1 1 2 1 1
1 1 1 1 2 1 1 1
1 1 1 2 1 1 1 1
1 1 2 1 1 1 1 1
1 2 1 1 1 1 1 1
2 1 1 1 1 1 1 1
1 1 1 1 1 2 2
1 1 1 1 2 1 2 
1 1 1 2 1 1 2


'''

# n = 10

'''

1. All 1's
2. All 2's
3. Eight 1's, One 2
4. Six 1's two 2
5. Four 1's, Three 2's
6. Two 1's, Four 2's

'''


'''

11 1's
9 one's One 2
7 one's two 2
5 one's three 2
3 ones 4 two
1 one 5 2

'''

# if even, 1 + half of num
# if odd, half of n rounded up 

def climbStairs(n):
    """
    :type n: int
    :rtype: int
    """

    

