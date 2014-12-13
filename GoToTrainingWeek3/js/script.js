/**
 * Created by DoC822 on 12/12/14.
 */
/*William Carey
SDI Week 3

 */

//Create code that sorts through list of fruit names and picks out pears

//Create fruit bowl array

var bowlOfFruit = ["apple", "banana", "pear","peach", "pear", "tomato", "kiwi", "pear" ];

//Console logs the WHOLE array
console.log(bowlOfFruit);

//How can I get one fruit inside the bowl.
console.log(bowlOfFruit[1]);

//how many fruits are in the bowl
//how many items are in the array
//lenght of the array
//Dot syntax - "use a period"
console.log(bowlOfFruit.length);

//what is the last index number of the array, using the length command
//Last index number is always 1 less than the length
//bowlOfFruit.length - 1 - last index#

console.log(bowlOfFruit.length - 1);

//Create a variable to track the number of pears we have
var totalNumPears = 0;

//Test each item, amd see if it is a pear
//if(condition or test){code to run if true} 24.30(invideo)

if(bowlOfFruit[0]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;

} else {
    //this code will run if the "if" statement is FALSE
    console.log("This fruit is not a Pear!");
}

if(bowlOfFruit[1]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;

} else {
    //this code will run if the "if" statement is FALSE
    console.log("This fruit is not a Pear!");
}

// Report out how many pears we have
console.log("There are " +totalNumPears+ " number of pears in the bowl");


if(bowlOfFruit[2]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a Pear!");
    totalNumPears++;

} else {
    //this code will run if the "if" statement is FALSE
    console.log("This fruit is not a Pear!");
}
if(bowlOfFruit[3]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a Pear!");
    totalNumPears++;

} else {
    //this code will run if the "if" statement is FALSE
    console.log("This fruit is not a Pear!");
}
// Report out how many pears we have
console.log("There are " +totalNumPears+ " number of pears in the bowl");


//We want the computer do to the "heavy lifting" for us

//Create a new tracking variable for the number of pears
var pearNumber = 0;
// Create a loop for repetitive code

//For Loop  -- is great for when you know how many times it should run
// for(intialize a counting variable; condition to test; incremental change)
// {Code to run each loop around}

for(var i=0 ;i<8; i++ ){
    console.log("Inside of the loop" +i);
    console.log(bowlOfFruit[i]);

    //Test each fruit if it is a pear
    if(bowlOfFruit[i]==="pear"){
        //add to pear total
        pearNumber++;
        console.log("This fruit is a pear!")
    } else {
        console.log("This fruit is not a pear");
    }
}

console.log("Total number of pears in the bowl is " +pearNumber);


//using conditionals to validate prompts
//ask the user for input
var userInput = prompt("Please type in your name");

//How do i test if the user left it blank

if(userInput===""){
    //the user left it blank

    //Re-prompt the user
    userInput=prompt("Please do not leave blank, What is your name?");
}

console.log("Welcome " +userInput+);

//Test of the user tupes in number?
//isNAN() - Is Not A Number

Console.log(isNAN("test"));
Console.log(isNAN(7));

var userNumber = prompt("Type in any number");
//Test if it is a number
if(isNAN(userNumber)){

    //this is a text string
    //reprompt user for a number
    userNumber = prompt("Only type in a number")

}