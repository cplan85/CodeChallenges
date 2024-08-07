var canConstruct = function(ransomNote, magazine) {
    let RNLObj = {};
    let MLObj = {};
    for (const letter of magazine) {
    !MLObj[letter] ? MLObj[letter] = 1 :
     MLObj[letter] = MLObj[letter] + 1;
    
    }
    for (const letter of ransomNote) {
        !RNLObj[letter] ? RNLObj[letter] = 1 :
        RNLObj[letter] = RNLObj[letter] + 1;
        }

    const RansomNoteKeys = Object.keys(RNLObj);

     for (const key of RansomNoteKeys) {
        if (!MLObj[key] || MLObj[key] < RNLObj[key]) {
            return false;
        }
     }
    return true;
};