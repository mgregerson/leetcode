class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        s_freqs = self.freq_counter(s)
        t_freqs = self.freq_counter(t)

        if s_freqs == t_freqs:
            return True
        return False

    def freq_counter(self, string):
        """
        :type s: str
        """

        freqs = {}

        for i in string: 
            if i in freqs:
                #update freqs, add 1
                freqs[i] = freqs[i] + 1
            else:
                freqs[i] = 1
        return freqs