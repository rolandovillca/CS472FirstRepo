// Excercise 1:
function myFilter(str, bannedWords) {
    let myArray = str.split(" ");
    let result = "";
    for(let i=0; i<myArray.length; i++) {
        let flag = false;
        for(let j=0; j<bannedWords.length; j++) {
            if (myArray[i] == bannedWords[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            result += myArray[i] + " ";
        }
    }
    return result;
}

String.prototype.filter = function(badWords) {
    // let str = this;
    return myFilter(this, badWords);
}

console.log("This house is not nice".filter(["not"]));
document.writeln("This house is not nice".filter(["not"]) + "<br><br>");

// Excercise 2:
function myBubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<(arr.length-i-1); j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

Array.prototype.bubbleSort = function() {
    // let arr = this;
    return myBubbleSort(this);
};

console.log([6,4,0, 3,-2,1].bubbleSort());
console.log([234, 43, 55, 63,  5, 6, 235, 547].bubbleSort());
document.writeln([6,4,0, 3,-2,1].bubbleSort() + "<br><br>");

// Excercise 3:
let Person = function(){};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return "Name: " + this.name + ", " + this.age + " years old.";
}

let Professor = function() {};
Professor.prototype = new Person();
Professor.prototype.tech = function(subject) {
    return "Professor " + this.name + " is now teaching " + subject;
}

let professor = new Professor();
professor.initialize("Mohammed", 30);
result = professor.tech("WAP!");
console.log(result);
document.writeln(result + "<br>");