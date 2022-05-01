// Question 2:
shortest = function(a, b, c) {
    let arr = [a, b, c];
    arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
});

console.log(shortest("aaaa", "aa", "aa"));
document.writeln(shortest("aaaa", "aa", "aa"));
document.i

// Question 3: