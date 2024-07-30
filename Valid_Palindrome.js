var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //charsArr = modifiedS.split("");
 
    let reversedString = "";
    for(var i=0; i< s.length; i ++) {
     reversedString = s[i] + reversedString;
    }
 
    if (reversedString === s) {
     return true
    } else return false;
     
 };