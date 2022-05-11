const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let totalInput = 0;
let myFun = function() {
    readline.question('Input a number: ', num => {
        if (num.toLowerCase() == "stop") {
            console.log(`Total: ${totalInput}`);
            readline.close();
        } else {
            newNum = parseInt(num)
            if (typeof newNum === 'number') {
                totalInput += newNum;
                console.log(`Counting...: ${totalInput}`);
                myFun();
            }
        }
    });
};
myFun();
