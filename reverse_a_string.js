// Reverse a string with a decrementing for loop

function reverseString (str) {
    
    // Step 1. Create an empty string that will host the new created string

    var newString = "";

    // Step 2. Create the for loop

    /* The starting point will be (str.length - 1) which corresponds to the last character of the string.
    As long as var i is greater than or equals 0, the loop will go on
    We decrement i after each iteration */

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
}

/* Let's say the string is "hello" and it's length is 5
    For each iteration i = str.length - 1 and newString = newString + str[i]
    First iteration: i = 5 - 1 = 4,           newString = "" + "o" = "o"
    Second iteration: i = 4 - 1 = 3,          newString = "" + "l" = "ol"
    Thid iteration: i = 3 - 1 = 2,            newString = "" + "l" = "oll"
    Fourth iteration: i = 2 - 1 = 1,          newString = "" + "e" = "olle"
    Fifth iteration: 1 - 1 = 0,               newString = "" + "h" = "olleh"
  End of the FOR loop */

  // Step 3. Return the reversed string

  return newString;
}



// Without comments 

function reverseString (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}  


// Reverse a string with split method

(function (str) {
    return str.split('').reverse().join('');
}());