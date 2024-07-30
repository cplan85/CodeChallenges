var isValid = function(s) {

    let stack = []

    let charArray = s.split('');
    let arrayCorrect = true;
    charArray.forEach((char) => {

        if ( char =="("  || char =="[" || char =="{"  ) {
            stack.push(char);
        } else {
            // get the last value
            let prevVal = stack.pop();

            if ( prevVal == "(" && char !== ")"   ) { arrayCorrect = false; } 
            if ( prevVal == "[" && char !== "]"   ) { arrayCorrect = false; } 
            if ( prevVal == "{" && char !== "}"   ) { arrayCorrect = false; } 
            if ( prevVal == undefined) { arrayCorrect = false; } 

        }
        
    })

    return stack.length === 0 && arrayCorrect;

};

isValid("(])")