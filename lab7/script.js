arrIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrWords = ["aaa", "aaaaaaaaaa", "aaa", "a", "aaaaa"];

// 4. Define a function sum() and a function multiply() that sums 
// and multiplies (respectively) all the numbers in an array of numbers.
const summ = (arr) => arr.reduce((total, elem) => total + elem);
const mul = (arr) => arr.reduce((total, elem) => total * elem);


// 5. Define a function reverse() that computes the reversal of a string.
reverse = (arr) => arr.reverse();

// 7 Write a function filterLongWords() that takes an array of words and 
// an integer i and returns the array of words that are longer than i.
filterLongWords = (arr, i) => arr.filter(s => s.length > i);

// helper
assertEqualArrays = function(array1, array2) {
    if (array1.length != array2.length) return false;
    let i = 0;
    while(i < array1.length) {
        if (array1[i] != array2[i]) return false;
        i++;
    }
    return true;
}