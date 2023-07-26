def letterCombinations(digits):
        """
        :type digits: str
        :rtype: List[str]
        """

        keyboard = {
                '2': ['a', 'b', 'c'],
                '3': ['d', 'e', 'f'],
                '4': ['g', 'h', 'i'],
                '5': ['j', 'k', 'l'],
                '6': ['m', 'n', 'o'],
                '7': ['p', 'q', 'r'],
                '8': ['t', 'u', 'v'],
                '9': ['w', 'x', 'y', 'z'],
        }

        output = []

        for letter in digits:
                