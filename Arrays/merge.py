# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
# and return an array of the non-overlapping intervals that cover all the intervals in the input.

# Example 1:

# Input: intervals = [[1,4],[2,3]]

# merged_vals = []
# curr = 1
# curr_val = [1, 4]
# sorted_vals[curr] = [2, 3]

def merge(intervals):
    sorted_vals = sorted(intervals)

    # we now know that the intervals are sorted
    merged_vals = []
    curr = 1
    curr_val = sorted_vals[0]

    if len(intervals) == 1:
            return [intervals[0]]

    while curr < len(intervals):
        if curr == len(sorted_vals) - 1:
            if sorted_vals[curr][0] <= curr_val[1]:
                curr_val[1] = max(sorted_vals[curr][1], curr_val[1])
                merged_vals.append(curr_val)
            else:
                # add our curr_val to the merged_list
                merged_vals.append(curr_val)
                merged_vals.append(sorted_vals[curr])
        # if the next values first index is less than than curr_vals second index, replace it's second index with curr_vals second index
        elif sorted_vals[curr][0] <= curr_val[1]:
            curr_val[1] = max(sorted_vals[curr][1], curr_val[1])
        # if it's not less, it means we have found a merged set
        else:
            merged_vals.append(curr_val)
            # curr_val will become this element at curr
            curr_val = sorted_vals[curr] 
        curr += 1
    return merged_vals
            