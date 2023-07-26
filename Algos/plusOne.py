


def plusOne(digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        # add all the numbers together

        result = ''

        for digit in digits:
            result += str(digit)
        
        final_num = str(int(result) + 1)
        return [int(x) for x in final_num]
        