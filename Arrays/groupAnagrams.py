# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
# typically using all the original letters exactly once.

# Example 1:
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# Example 2:
# Input: strs = [""]
# Output: [[""]]

# Example 3:
# Input: strs = ["a"]
# Output: [["a"]]

class Solution(object):
    def groupAnagrams(strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        sets = {}

        # each word, we want to iterate across sets - check if the sorted word is equal to one of those words
        for s in strs:
            sorted_word = "".join(sorted(s))
            if sorted_word in sets:
                sets[sorted_word].append(s)
            ## if not, the key does not exist
            else:
                sets[sorted_word] = [s]
        return sets.values()
            
            
        #     sets = {}

        # for s in strs:
        #     sorted_word = "".join(sorted(s))
        #     if sorted_word in sets:
        #         sets[sorted_word].append(s)
        #     else:
        #         sets[sorted_word] = [s]
        # return sets.values()
            