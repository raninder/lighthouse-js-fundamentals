
    let prompt = require("prompt-sync")();

let number = prompt("Guess a number: ");
//let number = 15;
console.log("You answered: " + number);
    let n = Math.ceil(Math.random() * 100);
    let count = 1;
    console.log (number+ " "+n);
    while(number!= n){
    if(number < n){
        console.log("Too Low!"); count++;}
    else if(number > n){
        console.log("Too High!"); 
        count++;
    }
        else if (isNaN(number)){
            console.log("Not a number! Try again!"); count++;
            }
      //else{
         // console.log("You got it! You took" +count+" attempts!");
      //}
     // number = 33;
      number = prompt("Guess a number: ");
    }
console.log("You got it! You took" +count+" attempts!");