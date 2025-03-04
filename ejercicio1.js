// subcadena mas larga sin repeticiones 

function longestUniqueSubstr(str) {
    let seen = new Set();
    let left =0, maxLength =0, start =0;

    for (let right = 0; right < str.length; right++) {
        if (seen.has(str[i])) {

            while (seen.has(str[right])) {
                seen.delete(str[left]);
                left++;
            }
            seen.add(str[right]);
            if(right - left +1 > maxLength) {
                maxLength = right - left +1;
                start = left;
            }
        } 
        
    } 
    return str.substr(start, start + maxLength);
}

console.log(longestUniqueSubstr("abcabcbb")); // abc
console.log(longestUniqueSubstr("bbbbb")); // b
console.log(longestUniqueSubstr("pwwkew")); // wke