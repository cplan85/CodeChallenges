/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) { return false}
    const charCounts = {};
    
    for (const char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    
    for (const char of t) {
        if (!charCounts[char]) {
            return false
        } else { charCounts[char] -= 1;}
    }
 return Object.values(charCounts).every(value => value === 0);
};

isAnagram("anagram", "nagaram")