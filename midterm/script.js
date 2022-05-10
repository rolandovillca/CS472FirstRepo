// Revealing Module Pattern
// Widely used in single page web app
const Module1 = (function() {
    const privateFunction = function(msg) {
        console.log(msg);
    };
    const publicFunction = function(txt) {
        privateFunction(txt);
    }
    return {
        publicFunction: publicFunction
    }
})();
Module1.publicFunction("MyMesage");

const Module2 = (function(){
    const privateArray = []; // private variable
    const publicFunction = function(value) {
        privateArray.push(value);
    }
    const publicPrint = function() {
        console.log(privateArray);
    }
    return {
        publicFunction: publicFunction,
        publicPrint: publicPrint
    }
})();
Module2.publicFunction(200);
Module2.publicFunction(200);
Module2.publicFunction(200);
Module2.publicPrint();
Module2.newPublicFunction = function() { console.log("New public function"); }
Module2.newPublicFunction(); // extending modules

// Revealing Module Pattern:
const counter = (function(){
    let privateCounter = 0;
    const changeBy = function(inc) {
        privateCounter += inc;
    }
    return {
        increment: function() { changeBy(1); },
        decrement: function() { changeBy(-1); },
        value: function() { return privateCounter; }
    }
})();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value());

