Check for palindromes with for loop

/* Half-indexing (length / 2) has benefits when processing large strings. 
We check the end from each part and divide the number of iterations inside the FOR loop by two. */

function palindome (str) {

    // Step 1. Create the for loop

    var length = str.length;

    for (var i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) { // As long as the characters from each part match, the FOR loop will go on
            return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
        }


/* Now let's sat that the string we want to check is "A man, a plan, a canal. Panama" */

/* Here length / 2 = 15
    For each iteration: i = ?   i < length / 2   i++    if(str[i] !== str[length - 1 - i])?
    1st iteration:          0       yes           1     if(str[0] !== str[15 - 1 - 0])? => if ("a" !== "a") return false
    2nd iteration:          1       yes           2     if(str[1] !== str[15 - 1 - 1])? => if ("m" !== "m") return false
    3rd iteration:          2       yes           3     if(str[2] !== str[15 - 1 - 2])? => if ("a" !== "a") return false
    4th iteration:          3       yes           4     if(str[3] !== str[15 - 1 - 3])? => if ("n" !== "n") return false
    5th iteration:          4       yes           5     if(str[4] !== str[15 - 1 - 4])? => if ("a" !== "a") return false
    .
    .
    .
    16th iteration:         15      no
    End of the FOR loop */
    }
    return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

palindrome ("A man, a plan, a canal. Panama");



function palindrome (str) {
    var length = str.length;
    for (var i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}