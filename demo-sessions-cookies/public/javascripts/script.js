$(function(){
    let myInput = $('<input>', {'type': 'button', 'id': 'but', 'value': 'My Button!'}).click(myF);
    let myInput2 = $('<input>', {'type': 'button', 'id': 'but', 'value': ' Button 2!'}).click(myF);
    let myInput3 = $('<input>', {'type': 'button', 'id': 'but', 'value': 'ThirdButton!'}).on('click', myF);
    let myInput4 = $('<input>', {'type': 'button', 'id': 'but', 'value': '4!'}).click(myF);
    $('#m').append(myInput);
    $('#m').append(myInput2);
    $('#m').append(myInput3);
    $('#m').append(myInput4);
    $('#m').click(inM);
    $('#m').click(outOfM);

});   // === window.onload(alert("H3y!"));


function outOfM(){
    console.log("Out Of M!!!");
}
function inM(){
    console.log("In M!!!");
    return false;
}

function myF(){
    console.log(this);
    return false;
}
















/*

function person (_name) {
    this._name =  _name;
}
let newPerson = Object.create(person);
let employee = Object.create(newPerson);
employee.id = 123;

let test = (function(){
    let myType = "Biker";

    let temp = Object.create(person);
    temp.bike = "honda";
    temp.prototype._name = "Jefferson";
    return temp;
})();
console.log(test.prototype._name);

employee.prototype._name = "Josh";

function driver(licence){
    this.licence = licence;
}

function car(licence){
    this.licence = licence;
}

//employee.prototype = person;
driver.prototype = person;
employee.prototype.talk = function(){
    console.log("NOM NOM!");
};
car.__proto__ = person;
let d = new driver("revoked");
let c = new car(342);
let c2 = new car(3423);
let c3 = new car(2342);

c2.__proto__ = person;


Array.prototype.sum = function(){
    let s;
    return this.reduce((x,y) => x+y);
};

//console.log(employee.prototype.name);
let myString = "Is my string";
let string2 = "this is the second string";
//myString.__proto__.slice = Array.prototype.slice;
//console.log(myString.prototype);
//console.log(Object.getPrototypeOf(myString));
















let res = (function(){
    let ty = "David";
    let ky = "Noah";
    function someOtherFunction(){
        console.log("This is some other function!");
    }

        return {
            firstName : ty,
            theFunction : someOtherFunction
        };
})();



//console.log(res);
//res.theFunction();




















let m = (function(x, y){return x * y})(5,7);
//console.log(m);

let mo = {
    name : "mo",
    giveName : function(){console.log(this.name);}
}
let joe = {
    name : "joe"
}

//mo.giveName.call(joe);

/*let multiplyObject = {
    multiply : function(x, y){ console.log(x * y); }
}
let multiply = function (x, y){
    console.log(x*y);
}
let multiply2 = multiply.bind(null, 2);
let multiply6 = multiply.bind(null, 6);
//multiply2(6);
//multiply6(7);

let myObject = {
    name : "this is my object",
    doSomething : function (){
       // (function(){this.myProperty = 15;})();
        (()=>this.myProperty = 15)();
       // console.log(this);
    }
}
//myObject.doSomething();
//console.log(myObject);

function fr(x, y){
    console.log(JSON.stringify(this) + " , x = " + x + " , y = " + y);
}

//let p = fr.bind(myObject, 5, 10);
//p();

//fr.apply(myObject, [5, 7]);









//var y = 10
let s1 = {
    name : "David",
    id : 34234,
    study : function(x){return console.log(x);}
}
s1.program = "ComPro";
let makeStudy = s1.study;
//alert(makeStudy);
//makeStudy("Student-Dying");





function func(y){
   return function func2(o){
        return o * y;
    }
}
//let david = function(x){return x * 2; }

function f(){
    return function c(x){
        return x * 2;
    }
}

let times2 = func(2);
/*let times2 = function(x){ 
    return  x * 2;
}
let times6 = func(6);
let times36 = func(36);

let twotimesfour = func(2)(4);
//alert(twotimesfour);
//alert(times2(12));
//alert(times6(4));

//alert(times36(32));






let myBomb;
let x = 0;
let timer = 5000;

window.onload = function (){
    let x = 19;
    (function(){
        let x = 15;
        document.getElementById("myButton").onclick = checkForEmail.bind(this, x);
    })();
    //tester();
      
}


function checkForEmail(x){
    let value = document.getElementById("myText").value + x;
    console.log(value);
    
    /*let jhonny = new RegExp ("^[a-zA-Z_-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$");
                               "^\w+@+\w+\.+\D{2,3}$"

    if(value.match(jhonny)){
        console.log(value);
    }else{
        alert("Incorrect email format!");
    }
}
let myArray = ["Maharishi", "International", "University"];
let yourArray = ["Web", "Application", "Programming"];
let student = {studentName: "David", id: 1111, Course: "MWA"};
let course = {courseNaame: "WAP", courseId: 2222};
let {studentName} = student;
//console.log(studentName);
let street = "100 N 4th";
let zip = 52557;
let addressInfo = [street, zip];
//console.log(addressInfo);
let address = {whereAmI: street, whatsMyZip: zip};

//console.log(address);
//newArray.forEach(x => console.log(x));

for(let i in myArray){
   // console.log(i);
} // = for(let i = 0; i < myArray.length; i++){}
for(let i of myArray){
 //   console.log(i);
}// myArray.forEach(x => do something.);

let sum = (x, y) => x+y;

function tester(){
    describe("sum", function(){
        it("returns the sum of 10 and 5", function(){
            assert.equal(sum(10,5), 15);
        });
    });

    describe("subtract", function(){
        it("returns the subtraction of 5 and 10", function(){
            assert.isNaN(subtract(5,10), 5);
        });
    });


    mocha.run();
}

function subtract(...x){
    return x.reduce((x, y) => x+y);
}

//console.log(subtract(2,5,6,7,8));

*/