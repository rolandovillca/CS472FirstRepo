x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log(x);
    console.log(a);
    document.writeln(x + "<br\>");
    document.writeln(a + "<br\>");
    var f = function(a, b, c) {
        b = a;
        console.log(b);
        document.writeln(b + "<br\>");
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
    document.writeln(b + "<br\>");
    var x = 10;
}

c(8, 9, 10);
console.log(b);
console.log(x);
document.writeln(b + "<br\>");
document.writeln(x + "<br\>");