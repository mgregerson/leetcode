# Write a function, which takes a non-negative integer (seconds) as input 
# and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

def make_readable(seconds):
    # First, let's find out the number of hours
    non_hours_time = int(seconds % 3600)
    num_hours = int((seconds - non_hours_time) / 3600)
    num_seconds = int(non_hours_time % 60)
    num_minutes = int((non_hours_time - num_seconds) / 60)

    if num_hours < 10:
        num_hours = '0' + f"{num_hours}"
    if num_minutes < 10:
        num_minutes = '0' + f"{num_minutes}"
    if num_seconds < 10:
        num_seconds = '0' + f"{num_seconds}"
    
    print(f"{num_hours}:{num_minutes}:{num_seconds}")
    