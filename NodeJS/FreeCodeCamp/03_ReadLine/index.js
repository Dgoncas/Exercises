const ReadLine = require('readline');
const rl = ReadLine.createInterface({input: process.stdin, output: process.stdout});

const n1 = Math.floor(Math.random() * 10) +1;
const n2 = Math.floor(Math.random() * 10) +1;

const sum = n1+n2;

rl.question(`What is ${n1} + ${n2} ? \n`, (userInput) =>{
    if(userInput.trim() == sum){
        rl.close();
    }else{
        rl.setPrompt("Incorrect, try again \n");
        rl.prompt();
        rl.on('line', (userInput) =>{
            if(userInput.trim() == sum){
                rl.close();
            }else{
                rl.setPrompt("Incorrect, try again \n")
                rl.prompt();
            }
        })
    }
});

rl.on('close', () => console.log('Correct!'));