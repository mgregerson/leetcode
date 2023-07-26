class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 1:
            return True
        # we will have to multiply 2**num from 1-n. If any = n, return true
        for i in range (1, n):
            if 2**i == n:
                return True
        return False
        