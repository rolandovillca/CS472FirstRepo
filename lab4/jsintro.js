document.writeln("<b>Part I </b><br\>")
// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. 
//     Use the if-then-else construct available in Javascript.
max = function(n1, n2) {
    if (n1 > n2) return n1;
    else return n2;
}
console.log(max(10, 20));
document.writeln(max(10, 20) + "<br\>");

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
let maxOfThree = function (a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(10, 20, 30));
document.writeln(maxOfThree(10, 20, 30) + "<br\>");

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) 
//     and returns true if it is a vowel, false otherwise.
let isVowel = function(c) {
    let a = ["a", "e", "i", "o", "u"];
    for (let i=0; i<a.length; i++) {
        if (a[i] === c.toLowerCase()) return true;
    }
    return false;
}
console.log(isVowel('d'));
console.log(isVowel('a'));
console.log(isVowel('A'));
document.writeln(isVowel('d'));
document.writeln(isVowel('a'));
document.writeln(isVowel('A') + "<br\>");

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//     all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
//     multiply([1,2,3,4]) should return 24.
const arr_a = [1, 2, 3, 4];
const arr_b = arr_a.map(function(elem, i, array) {
    return elem + i;
});
console.log(arr_b);
document.writeln(arr_b + "<br\>");

// 5. Define a function reverse() that computes the reversal of a string. 
//     For example, reverse("jag testar") should return the string "ratset gaj".
reverse = function(s) {
    let ss = s+"";
    let res = "";
    for(let i=ss.length-1; i>=0; i--) {
        res += ss.charAt(i);
    }
    return res;
}
let str = "jag testar";
console.log(reverse(str));
document.writeln(reverse(str) + "<br\>");

// 6. Write a function findLongestWord() that takes an array of words 
//     and returns the length of the longest one.
findLongestWord = function(a) {
    let idxMax = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i].length > a[idxMax].length) {
            idxMax = i;
        }
    }
    return a[idxMax];
}
let arr1 = ["a", "abc", "ab"];
console.log(findLongestWord(arr1));
document.writeln(findLongestWord(arr1) + "<br/>");

// 7. Write a function filterLongWords() that takes an array of words 
//     and an integer i and returns the array of words that are longer than i.
filterLongWords = function(arr, iLen) {
    let resp = [];
    for(let i=0; i<arr.length; i++) {
        if (arr[i].length > iLen) {
            resp.push(arr[i]);
        }
    }
    return resp;
}
let arr2 = ["a", "abc", "ab"];
console.log(filterLongWords(arr2, 2));
document.writeln(filterLongWords(arr2, 2) + "<br/>");

document.writeln("<br\>")
document.writeln("<b>Part II</b><br\>")