// 8. Modify the jsfiddle on the map/filter/reduce 
// slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);
