class Solution(object):
    def strStr(haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        curr = 0
        needle_len = len(needle)
        
        # if we find that letter, start a while loop that is the len of needle
        while curr < len(haystack):
            # check if the curr letter is equal to the first letter of needle
            if haystack[curr] == needle[0]:
              haystack_check = curr+1
              needle_check = 1

              if haystack[curr] == needle:
                  return curr
              if haystack_check == len(haystack):
                  return -1
          
              while needle_check < needle_len:
                  if haystack[haystack_check] != needle[needle_check]:
                      # if it's not equal, we know that we can break the while loop
                      break
                  else:
                      # if it is equal, we can simple increase needle_check and needle_check
                      haystack_check += 1
                      needle_check += 1

              if needle_check == needle_len:
                  return curr
            # otherwise, we just need to increase curr
            curr += 1
        return -1