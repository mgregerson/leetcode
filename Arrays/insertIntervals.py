# You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
# represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
# You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

# Insert newInterval into intervals such that intervals is still sorted in ascending order by starti 
# and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

# Return intervals after the insertion.

# Example 1:

# Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
# Output: [[1,5],[6,9]]
# Example 2:

# Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
# Output: [[1,2],[3,10],[12,16]]
# Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


def insert(intervals, newInterval):
        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """

        sorted_vals = []

        if len(intervals) == 0:
            return [newInterval]
        else:
          index_to_insert = len(intervals)
          # we know we need to sort the intervals
          sorted_vals = sorted(intervals)
          for i, interval in enumerate(intervals):
            if newInterval[0] < interval[0]:
                index_to_insert = i
                break
          sorted_vals.insert(index_to_insert, newInterval)
          
        # we now have the entire array sorted

        # let's start our combinations
        curr = 1
        curr_val = sorted_vals[0]
        merged_vals = []

        while curr < len(sorted_vals):
              if curr == len(sorted_vals) - 1:
                  if sorted_vals[curr][0] <= curr_val[1]:
                      curr_val[1] = max(sorted_vals[curr][1], curr_val[1])
                      merged_vals.append(curr_val)
                  else:
                      # add our curr_val to the merged_list
                      merged_vals.append(curr_val)
                      merged_vals.append(sorted_vals[curr])
              elif sorted_vals[curr][0] <= curr_val[1]:
                  curr_val[1] = max(sorted_vals[curr][1], curr_val[1])
              else:
                  merged_vals.append(curr_val)
                  # curr_val will become this element at curr
                  curr_val = sorted_vals[curr] 
              curr += 1
        return merged_vals


        

        

