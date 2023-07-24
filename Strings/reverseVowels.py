# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
# lower and upper cases, more than once.

# Example 1:

# Input: s = "hello"
# Output: "holle"
# Example 2:

# Input: s = "leetcode"
# Output: "leotcede"


class Solution(object):
    def reverseVowels(s):
        """
        :type s: str
        :rtype: str
        """

        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        # save a list of vowels to put back into our word
        temp_word = []
        # vowels_in_word = ['e', 'o']
        vowels_in_s = []
        # word = [h, vowel, l, l, vowel]

        # if word[n] == vowel, pop off the back of the stack

        # okay, we know that we want to use multiple pointers. Each time we find a vowel, wait there,
        # when the other pointer finds a vowel, flip them 
        for letter in s:
            if letter in vowels:
                temp_word.append('vowel')
                vowels_in_s.append(letter)
            else:
                temp_word.append(letter)
        
        for i in range(len(temp_word)):
            if temp_word[i] == 'vowel':
                temp_word[i] = vowels_in_s.pop(-1)
        
        return ''.join(temp_word)
            