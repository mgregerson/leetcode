# DESCRIPTION:
# You are given an array (which will have a length of at least 3, but could be very large) 
# containing integers. The array is either entirely comprised of odd integers 
# or entirely comprised of even integers except for a single integer N. 
# Write a method that takes the array as an argument and returns this "outlier" N.

# Examples
# [2, 4, 0, 100, 4, 11, 2602, 36]
# Should return: 11 (the only odd number)

# [160, 3, 1719, 19, 11, 13, -21]
# Should return: 160 (the only even number)

def find_outlier(integers):
    # check first three numbers
    evens = 0
    odds = 0
    for number in integers:
        if number % 2 == 0:
            evens += 1
        else:
            odds += 1 
    print(evens, odds)
    if evens == 1:
        for number in integers:
            if number % 2 == 0:
                return number
    else:
        for number in integers:
            if number % 2 == 1:
                return number
        