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
            let currentVal = t[i]
            let indexToRemove = s.indexOf(currentVal)
          
            s = s.slice(0, indexToRemove) + s.slice(indexToRemove + 1);
            
            console.log(s);
            result = true;
        } else {
            return false;
        }
        
     }
return result;
};


isAnagram("anagram", "nagaram")