/**
 * Created by DoC822 on 12/11/14.
 */
/*
 William Carey
 SDI Section # 3
 Conditionals Wacky
 12-11-2014
 */



//Flying a kite
//what's the wind speed
//is it an open area
// are you willing to run
// can you tell which way the wind is blowing
//Alert user to intentions
alert ("Let's try to fly a kite!");

//is it a windy day

var windy = true;

//are you willing to run
var run = true;

//prompt to ask about the conditions outside
var windCond = prompt("Is it windy outside?"[true || false];

//conditional to check for empty answer
if(windCond ===""){

 //Re-prompt the user
 windCond = prompt("Is it windy outside, your input is greatly appreciated.");

//prompt to ask if there's enough space to fly a kite
var openArea = prompt("Are you in an open area?"(true || false);

//if it is a windy day then we will go outside and fly a kite
if(windy===true && openArea===true){
 //will let you know we can fly a kite because conditions are good or if you're willing to run we can fly a kite that way
 console.log("Let's go fly a kite!");
}else if(windCond!==true && run===true){
 console.log("If you don't mind running maybe we can get it up to speed that way");
 }else{
 console.log("Wait for the wind to pick up!");
}

