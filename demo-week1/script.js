let myBomb;
let x = 0;
let timer = 5000;

window.onload = function (){
    //tester();
    document.getElementById("myButton").onclick = checkForEmail;
}

function checkForEmail(){
    let value = document.getElementById("myText").value;
    console.log(value);
    
    /*let jhonny = new RegExp ("^[a-zA-Z_-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$");

    if(value.match(jhonny)){
        console.log(value);
    }else{
        alert("Incorrect email format!");
    }*/
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

