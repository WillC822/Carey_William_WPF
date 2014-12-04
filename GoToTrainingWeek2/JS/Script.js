/*
William Carey
SDI Section # 3
Go To Training Week #2
Expressions Industry
12-3-2014
*/


//alert("Testing if the js file is connected.");

// Create a age calculator

//Ask the user their name
var name = prompt("Please type in your name");

//Use the variable and say hello to the user
alert ("Welcome "+name+"! Let's figure out how old you are");

//Ask the user what  year they were born in
//Create a variable to catch that answer
var yearBorn = prompt("What year were you born in")

//Console.log to check that they typed something in
console.log(yearBorn);

//Calculate their age

//We need the current year
var currentYear = 2014;

var age = currentYear-yearBorn;

//Alert the user with their current age
alert(name+ " you are ""+age+" "years old.");
