# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving
#  the order of characters. No two characters may map to the same character, but a character may map to itself.

# Example 1:

# Input: s = "egg", t = "add"
# Output: true
# Example 2:

'''

{'e': 'a', 'g': 'd'}

'''

# Input: s = "foo", t = "bar"
# Output: false
# Example 3:

# Input: s = "paper", t = "title"
# Output: true

def isIsomorphic(s, t):
    # let's create a new set
    hashmap = {}
    reverse_hashmap = {}
    for i, letter in enumerate(s):
        if s[i] not in hashmap:
            if t[i] in reverse_hashmap and reverse_hashmap[t[i]] != s[i]:
                return False
            hashmap[s[i]] = t[i]
            reverse_hashmap[t[i]] = s[i]
        else:
            # check if the letter is equal to t[i]
            if hashmap[s[i]] != t[i]:
                return False
    return True