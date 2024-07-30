var isValid = function(s) {

    let CharAndValid = {}
    let currentChar ="";
    let charArray = s.split("");
    charArray.forEach((char) => {

        if ( char =="("  || char =="[" || char =="{"  ) {
            currentChar = char;
            CharAndValid[char] = false
        }

        if (char == ")" && currentChar != "(" || char == "]" && currentChar != "[" || char == "}" && currentChar != "{") {
            CharAndValid["rightOrder"] = false;
            return;
        }

        if ( currentChar =="("  && char == ")") {
            CharAndValid["("] = true;
            CharAndValid["rightOrder"] = true;
            currentChar ="";
        }

        if ( currentChar == "[" && char == "]") {
            CharAndValid["["] = true;
            CharAndValid["rightOrder"] = true;
            currentChar ="";
        }

        if ( currentChar == "{" && char == "}") {
            CharAndValid["{"] = true;
            CharAndValid["rightOrder"] = true;
            currentChar ="";
        }

    })


    const allValuesAreTrue = Object.values(CharAndValid).every(Boolean);

    console.log(CharAndValid);
    console.log(allValuesAreTrue);
    return allValuesAreTrue;
    //console.log(CharAndValid, "charAndValid")
};

isValid("{[]}")