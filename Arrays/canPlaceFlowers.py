# Example 1:

# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true
# Example 2:

# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false

# [1,0,0,0,0,0,1], 2

# index = 4, n = 1

class Solution(object):
    def canPlaceFlowers(flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        

        count = 0
        i = 0
        size = len(flowerbed)

        while i < size:
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i - 1] == 0) and (i == size - 1 or flowerbed[i + 1] == 0):
                flowerbed[i] == 1
                count += 1
                if count == n:
                    return True
            i += 1
        return False