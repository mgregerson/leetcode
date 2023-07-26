import math

def find_next_square(sq):
    square_root = math.sqrt(sq)
    print(square_root.is_integer())
    if square_root.is_integer() == False:
        return -1
    curr = sq + 1
    while True:
        curr_sq_root = math.sqrt(curr)
        if curr_sq_root.is_integer():
            return curr
        curr += 1