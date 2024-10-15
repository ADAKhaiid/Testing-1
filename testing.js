/*
const readline = require("readline-sync");

let UpOrDown = readline.question("Up or Down? ") ;
let Anything = 0 ;

while (Anything == 0) {
    if (UpOrDown == "up") {
        let UserNumber = Number(readline.question("What Number would you like to count to? "))
        for (i = 1 ; i < UserNumber +1 ; i++) { 
            console.log(i)
        Anything = 1
    }}
    else if (UpOrDown == "down") {
        let UserNumber = Number(readline.question("Enter a number below 20. "))
        if (UserNumber < 20) {
            for (i =20 ; i > UserNumber - 1 ; i--) { 
                console.log(i)
            Anything = 1
}}}
    else {
        console.log("I dont Understand")
        let UpOrDown = readline.question("Up or Down? ")
}}

*/

/*const readline = require("readline-sync");

var UserInput = Number(readline.question("Enter a Number ")) ;
let Total = 0 
while (UserInput > 0) {
    Total = UserInput + Total
    var UserInput = Number(readline.question("Enter a Number ")) 
    
}
console.log(Total)*/
/*
var CurrentPopulation = 67765900
var Year = 2023

while (CurrentPopulation < 80000000) {
    console.log(Year, CurrentPopulation)
    CurrentPopulation = CurrentPopulation * 1.003
    Year = Year +1
}*/



/* COME BACK TO THIS AFTER

const readline = require("readline-sync");

var UserNumber = readline.question("Enter a number between 1 and 100 ") ;

if (UserNumber > 100 || UserNumber < 0) {
    console.log("Incorrect Number")
    var UserNumber = readline.question("Enter a number between 1 and 100 ") ;
}
else {

}

*/

/* 

const readline = require("readline-sync");

var UserNumber = Number(readline.question("Enter a number:")) ;

function Calculate (UserNumber) {
    let SquaredNumber = UserNumber * UserNumber
    let CubedNumber = UserNumber * UserNumber * UserNumber
    let Difference = CubedNumber - SquaredNumber
    console.log(Difference)
}

Calculate(UserNumber) */

/* const readline = require("readline-sync");

var UserNumber1 = Number(readline.question("Enter a number:")) ;
var UserNumber2 = Number(readline.question("Enter a number:")) ;
var UserNumber3 = Number(readline.question("Enter a number:")) ;
var UserNumber4 = Number(readline.question("Enter a number:")) ;

function AverageNumber(a,b,c,d) {
    let Average = (a + b + c + d) / 4 
    console.log(Average)
}

AverageNumber(UserNumber1,UserNumber2,UserNumber3,UserNumber4) */


/* const readline = require("readline-sync");

var UserNumber1 = Number(readline.question("Enter a number:")) ;
var UserNumber2 = Number(readline.question("Enter a number:")) ;
var UserNumber3 = Number(readline.question("Enter a number:")) ;

function Highest (a,b,c) {
    if (a > (b && c)) {
        console.log(a)
    }
    else if (b > (a && c)) {
        console.log(b)
    }
    else {
        console.log(c)
    }
}

Highest(UserNumber1,UserNumber2,UserNumber3) */

/* const readline = require("readline-sync");

var UserInput = readline.question("Enter a sentence:") ;

function Length (a) {
    console.log(a.replace(/\s/g, '').length);
}
Length(UserInput) */

/* const readline = require("readline-sync");

var UserInput = readline.question("Enter a sentence:") ;

function Double (a) {
    var NewString = ""
    for (i = 0; i < (a.length) ; i++) {
        NewString += a[i]
        NewString += a[i] 
    }
    console.log(NewString)
}

Double(UserInput) */

function primeCheck (a) { 
        if (a > 10 && (a % (2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10) == 0)) {
            console.log("Prime")
    }
    else {
        console.log("Not Prime")
    }
}

primeCheck(7)