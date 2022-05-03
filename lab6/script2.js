document.writeln("<br\>");
document.writeln("Question 3: <br\>");
// scope A
let a = "a";
console.log(b)
document.writeln(b + "<br\>");
function xFun() {
    // scope B
    let b = "b";
    // console.log(b);
    // document.writeln(b + "<br\>");
    function yFun() {
        // scope C
        let c = "c";
        // console.log(c);
        // document.writeln(b + "<br\>");
    }
}