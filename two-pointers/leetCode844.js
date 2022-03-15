/*
leetcode 844

Given two strings s and t,
return true if they are equal when both are typed into empty text editors.
 '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example: 
Input: s = "ab#c", t = "ad#c"
Output: true`
Explanation: Both s and t become "ac".

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

// IN -> String s, String t
// OUT - > Boolean

 let backspaceCompare = function(s, t) {
    let sCharArr = [];
    let tCharArr = [];
    
    for(let char of s){
        if(char !== '#'){
            sCharArr.push(char);
        } else if (char === '#' && sCharArr.length !== 0){
            sCharArr.pop();
        }
    }
    
    for(let char of t){
        if(char !== '#'){
            tCharArr.push(char);
        } else if (char === '#' && tCharArr.length !== 0){
            tCharArr.pop();
        }
    }

    return sCharArr.join() === tCharArr.join()
};