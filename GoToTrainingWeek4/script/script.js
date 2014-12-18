/*
William Carey
SDI 1412
Go To Training Week #4
12-17-2014
 */

//alert("testing to see if js file is connected")

//Create a fundtion that spits a random interger between two given values

//Ask the user for a min number
var min = prompt("Let's get a random number between two values. \n Please type in the minumum value:");

//Validate that the user actually typed in something, so not blank.

/*
//older way of doing it
if(min====""){
    //reprompt the user
    min = prompt("Please do not leave blank! \n Please type in a minimum number.")
}

*/

//Validate using a while loop
//Test to see if blank

/*
while(min===""){
    //reprompt the user
    min = prompt("Please do not leave blank! \n Please type in a minimum number.")
}


//Validate that it is a number using a while loop
while(isNaN(min)){
    //reprompt user
    min= prompt("Please only type in numbers. \n Please type in a minimum number:");
}

*/

//Validate using a combined while loop, use and && or or||
while(min==="" || isNaN(min)){

    if(min===""){
        //Re-prompt the user
        min=prompt("Please do not leave blank and only type in numbers! \n Please type in a min value:");
    }
    else{
        min=prompt("Please only type in numbers \n Please type in a min value:")
    }


}



//Test if the user types in something specific
//Example yes or no questions

var userGoodMood = prompt("Are you in a good mood/ \n Please answer yes or no:");

while(userGoodMood!="yes" && userGoodMood!="Yes"){
    //reprompt the user
    //Y is not the same as y
    userGoodMood = prompt("Please only type in yes or no \n Are you in a good mood?");

}




//Parameters are used to catch the incoming arguments

function randomizr(minNum,maxNum){

    //console.log(min); - do not use variable from the main code in your functions

    //in the function
    console.log("Inside the function");

    //use parameters instead of the main code variables

    //Find a random number between 2 values
    //Math.random() * ( max value - min value) + min value
    var randomNumber = Math.round ( Math.random() *(maxNum-minNum)+ Number(minNum))
    //console.log(randomNumber);  Do Not Use Console.Log inside of a function

    //use a return value instead
    return randomNumber;
}

// We need a function call to "run" our function
//arguments go in the function call
//"What information in ou main does our function need access too.

//We have to "catch" the returned value of our functional call
console.log("The random number is "+results);

console.log(randomizr(30,70)); can use other arguments