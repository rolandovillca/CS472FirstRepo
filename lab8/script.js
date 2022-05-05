// 1. Review the add() function show below. notice that a module is used to create a 
// private variable called counter. 
// Modify this code to make a revealing module that returns an object with two methods. 
// The returned object should have a add() method and a reset() method. Where the add 
// method adds 1 to the counter, and the reset method set it back to zero.
// Lastly change the global variable name that will hold this object from add to count.
// 
// var add = (function() {
//     var counter = 0;
//     return function() {
//         return counter += 1;
//     }
// })();

var count = (function() {
    var counter = 0;
    let add = function() {
        counter += 1;
        return counter;
    }
    let reset = function() {
        counter = 0;
        return counter;
    }
    return {
        add: add,
        reset: reset
    }
})();
document.writeln("Excercise 1: <br/>");
document.writeln("counter add: " + count.add() + "<br/>");
document.writeln("counter add: " + count.add() + "<br/>");
document.writeln("counter add: " + count.add() + "<br/>");
document.writeln("counter add: " + count.add() + "<br/>");
document.writeln("counter add: " + count.add() + "<br/>");
document.writeln("counter reset: " + count.reset() + "<br/><br/>");

// 2. In the definition of the add() function in the code for the question 1, identify 
// the “free” variable. Also write down a definition of what “free” variables are.
document.writeln("Excercise 2: <br/>");
document.writeln("Free variable in add() function is 'counter'. <br/>");
document.writeln("Free variable is declared in parent function and used in child function.<br/><br>");

// 3. The add() function in question 1 always adds 1 to the counter each time it is called. 
// Write a make_adder(inc) function whose return value is an add function with increment value
// of inc instead of 1. In other words your function should be able to do the following:
// var add5 = make_adder(5) // returns a function with its own private counter.
// add5(); add5(); console.log(add5()); // output is 15
// var add7 = make_adder(7) // returns a function with its own private counter.
// add7(); add7(); console.log(add7()); // output is 21
document.writeln("Excercise 3: <br/>");
var make_adder = function(inc) {
    var counter = 0;
    return function() {
        counter += inc;
        return counter;
    }
};
let add7 = make_adder(7)
document.writeln("make_adder: " + add7() + "<br/>");
document.writeln("make_adder: " + add7() + "<br/>");
document.writeln("make_adder: " + add7() + "<br/></br>");

// 4. Suppose you are given a file of JavaScript code containing a list of many function and 
// variable declarations. All of these function and variable names will be added to the Global 
// JavaScript namespace. What simple modification to the JavaScript file can remove all the names 
// from the Global namespace?
document.writeln("Excercise 4: <br/>");
document.writeln("use strict <br/></br>");

// 5. Using the Revealing Module Pattern, write a JavaScript definition of a Module 
// that creates an Employee Object with the following fields and methods:
// Private field: name
// Private field: age
// Private field: salary
// Private method: getName()
// Private method: getAge()
// Private method: getSalary()
// Public method: setName()
// Public method: setAge()
// Public method: setSalary()
// Public method: increaseSalary(percentage) // uses private getSalary()
// Public method: incrementAge() // uses private getAge()
document.writeln("Excercise 5: <br/>");
let employee = ((name, age, salary)=>{
    let empName = name;
    let empAge = age;
    let empSalary = salary;
    let getName = function() { return empName;}
    let getAge = function() { return empAge;}
    let getSalary = function() { return empSalary;}
    return {
        getName: getName,
        getAge: getAge,
        getSalary: getSalary,
        setName: function(name) {empName = name;},
        setAge: function(age) {empAge = age;},
        setSalary: function(salary) {empSalary = salary;},
        increaseSalary: function(percentage) {empSalary *= percentage;},
        incrementAge: function() {empAge++;}
    }
})("Pedro", 25, 10000);
document.writeln("Name: " + employee.getName() + "<br/>");
document.writeln("Age: " + employee.getAge() + "<br/>");
document.writeln("Salary: " + employee.getSalary() + "<br/>");
document.writeln("Set New Salary: " + employee.setSalary(15000) + "<br/>");
document.writeln("Salary: " + employee.getSalary() + "<br/>");
document.writeln("Increase Salary: " + employee.increaseSalary(10000) + "<br/>");
document.writeln("Salary Incremented: " + employee.getSalary() + "<br/>");
document.writeln("Increment Age: " + employee.incrementAge() + "<br/>");
document.writeln("Age Incremented: " + employee.getAge() + "<br/></br>");


// 6. Write a few JavaScript instruction to make a Module extension to the module made 
// in the previous question. Very important - you are not allowed to modify any of the 
// code to facilitate the extension. Your extension should add a public address field 
// and public methods setAddress(address) and getAddress()
document.writeln("Excercise 6: <br/>");
let address = ((street, city, zip)=>{
    let empStreet = street;
    let empCity = city;
    let empZip = zip;
    return {
        getStreet: ()=>empStreet,
        getCity: ()=>empCity,
        getZip: ()=>empZip,
        setStreet: (a)=>empStreet=a,
        setCity: (a)=>empCity=a,
        setZip: (a)=>empZip=a
    }
})("N 4th 1000", "Fairfield", 52557);
let employee1 = ((name, age, salary, address)=>{
    let empName = name;
    let empAge = age;
    let empSalary = salary;
    let empAddress = address;
    let getName = function() { return empName; }
    let getAge = function() { return empAge; }
    let getSalary = function() { return empSalary; }
    let getAddress = function() { return empAddress; }
    return {
        getName: getName,
        getAge: getAge,
        getSalary: getSalary,
        setName: function(name) {empName = name;},
        setAge: function(age) {empAge = age;},
        setSalary: function(salary) {empSalary = salary;},
        increaseSalary: function(percentage) {empSalary *= percentage;},
        incrementAge: function() {empAge++;},
        getAddress: {
            getStreet: address.getStreet(),
            getCity: address.getCity(),
            getAge: address.getZip()
        }
    }
})("Pedro", 25, 10000, address);
document.writeln("Street: " + employee1.getAddress.getStreet + "<br/>");
document.writeln("City: " + employee1.getAddress.getCity + "<br/>");
document.writeln("Zip: " + employee1.getAddress.getZip + "<br/>");