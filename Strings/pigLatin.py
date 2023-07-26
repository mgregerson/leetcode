def pig_it(text):
    # let's split the words into a list
    split_text = text.split(' ')
    pig_text = ''
    for word in split_text:
        if word.isalpha():
          first_letter = word[0]
          pig_text += word[1:] + word[0] + 'ay '
        else:
           pig_text += word + ' '
    return pig_text[:-1]




# Move the first letter of each word to the end of it, 
# then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !