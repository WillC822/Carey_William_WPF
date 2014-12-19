/*
 William Carey
 SDI 1412
 12.18.2014
 */

//alert("test to see if code works");

//What's your name?
var name = prompt("What is your name?");

//Hi how are you, let's figure out what to eat.
var hungry = prompt("Hi " +name+ " are you hungry,\nPlease answer Yes or No?");

//If the person is hungry and answers any variation of yes.
if(hungry==="YES"||"Yes"||"yes"){
    //See what they're in the mood for
    console.log("Great, let's see what you may be in the mood for?");
    alert("Great, let's see what you may be in the mood for?");
}else{
    //if n
    console.log("Well, maybe if you see what's to offer you may change your mind");
    alert("Well, maybe if you see what's to offer you may change your mind");
}
//Ask what the user is in the mood for.
var taste = prompt("Are you in the mood for BBQ, Tacos, American, Italian, Japanese or Mexican?");

/*
Prob don't need this because of the previous question
//What are you in the mood for
var mood =["BBQ","Island Tacos","American", "Italian", "Japanese","Mexican"];
*/

//Where should we go to eat for dinner.
var rest =["Jimmy Hulas","Texas Roadhouse","Zaxbys","Olive Garden","Bahama Breeze", "Kobe", "Chevys","4Rivers"];



//How much are you able to spend
var price = prompt("Are you looking for someplace cheap, moderate or expensive");

function(){
    rest[0]&&mood[]
}