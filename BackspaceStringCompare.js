/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sArray = s.split("");
    let tArray = t.split("");

     if ( removeCharacters(sArray) == removeCharacters(tArray) ) {
         return true
     } else return false
};

function removeCharacters(stringsArray) {

    if (stringsArray[0] === "#") { stringsArray.shift(); }

     for(let i=0; i <= stringsArray.length; i++) {
        if (stringsArray[i] == "#") {
           
            stringsArray.splice(i-1, 2);
            i = 0
        }
    }

     if (stringsArray[0] === "#") {
       stringsArray.shift(); 
    }
   return stringsArray.join('');
}