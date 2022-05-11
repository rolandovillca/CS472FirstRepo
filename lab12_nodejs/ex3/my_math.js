let math = (function(){
    add = function(x, y){};
    subtract = function(x, y){return x+y;};
    multiply = function(x, y){return x*y;};
    divide = function(x, y){return x/y;};
    let PI = 3.14; // constant set to 3.14
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        pi: PI
    }
})();

module.exports = math;
