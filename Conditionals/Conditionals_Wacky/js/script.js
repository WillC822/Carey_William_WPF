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

alert("Let's try to fly a kite!");

//is it a windy day

var windy = true;
var windSpeed;
var windCond;

windCond = (windSpeed < 5);

var windCond = prompt("Is it windy outside?");

var openArea = prompt("Are you in an open area?");

//if it is a windy day then we will go outside and fly a kite
if(windy==true){
 //will let you know we can fly a kite because conditions are good
 console.log("Let's go fly a kite!");
}else{
 console.log("Wait for the wind to pick up!");}


