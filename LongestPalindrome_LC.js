var longestPalindrome = function(s) {
    const charCounts = {};
    if (s.length === 1){ return 1}
    
     for (const char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    
    const keys = Object.keys(charCounts);
    
    if (keys.length === 1) {
        return charCounts[keys[0]];
    }

    let longestPalindrome = 0;

    for (const value of Object.values(charCounts)) {
        if (value !== 1) {
            longestPalindrome += Math.floor(value / 2) * 2;
        }
    }

     const oddKey = Object.keys(charCounts).find(key => charCounts[key] % 2 !== 0);
    if (s.length  % 2 !== 0 || Object.values(charCounts).includes(1) || s.length  % 2 == 0 ) {
       
        if (oddKey) {
            longestPalindrome += 1;
        }
    }

    return longestPalindrome;

};

longestPalindrome("ccc")