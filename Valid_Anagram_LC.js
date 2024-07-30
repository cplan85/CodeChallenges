/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false}
     result = false;
     for(var i=0; i<t.length;i ++) {
        if (s.includes(t[i])) {
            let indexToRemove = s.indexOf(t[i])
            if (indexToRemove == s.length -1) {
                s = s.slice(0, indexToRemove);
               
            }
            else {
                s = s.substring(0, indexToRemove - 1) + s.substring(indexToRemove);
            }
            
            result = true;
            console.log(t[i],  "does exist" ,s, indexToRemove)
        } else {
            console.log(t[i], s, "doesn't exist")
            return false;
        }
        
     }
return result;
};