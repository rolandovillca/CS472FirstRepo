const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name? ', name => {
    readline.question("age? ", age => {
        console.log(`Welcome ${name}`);
        if (age < 16) {
            console.log("No, you are not allowed to drive in Iowa");
        } else {
            console.log("Yes, you are allowed to drive in Iowa");
        }
        readline.close();
    });
});
