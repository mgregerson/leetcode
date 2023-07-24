class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        valid_letters = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h,' 'i', 'j', 
                            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                            'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}
        
        
        
        str_sans_whitespace = s.replace(' ', '').lower()
        first = 0
        last = len(str_sans_whitespace) - 1

        while first < last:
            # check if letter is in valid letters
            if str_sans_whitespace[first] not in valid_letters:
                first += 1
                continue
            if str_sans_whitespace[last] not in valid_letters:
                last -= 1
                continue
            if str_sans_whitespace[first] != str_sans_whitespace[last]:
                return False
            first += 1
            last -= 1

        return True