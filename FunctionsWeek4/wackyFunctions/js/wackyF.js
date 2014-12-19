/*
 William Carey
 SDI 1412
 12.18.2014
 */

//alert("test to see if code works");


//Superman is said to be as fast or faster than the speed of sound. How long would it take can him to travel around the earth?

alert("Superman is said to be as fast or faster than the speed of sound \nHow long would it take him to travel around the earth?");

var superDistance = function(feet,seconds){
    var feet = 5280;
    var seconds= 3600;
    var superMan = feet*seconds;
    return superMan;
}

//Speed of sound
var speedSound = 767;

//There are 3600 seconds in an hour
var hour = 3600/60;

//There are 60 minutes in an hour
var min = hour/60;

/*
//This will be our starting number of 1
var i=1;

//This is to show the amount of time that has passed
var time=(min*i++);
*/

//This is the earths mileage around it's circumference
var earthCirc = 24902;

//The time around is equal to the speed of sound divided by earthscircumferennce
var timeAround = earthCirc/speedSound;
//Prompt to alert user of calculations
alert("Superman could travel around the earth" +timeAround+ "times in an hour." );
//Ternary to show the comparison between what someone may think
miles = (timeAround>hour) ? "Geez he's fast" : "I assumed he'd be faster";
console.log(miles);
alert(miles);
//Prompt user for best guess based on information provided
var user = prompt("Based on the previous answer how many times do you think he could go around in 3.5 hours?");

//If user is equal to or greater than what the actual number is a general comment would sent back to the user
userMiles = (timeAround=>user) ? "Close but not quite" : "Great job!!!";
console.log(userMiles);
alert(userMiles);

//Alert and C-log answers
alert("In that amount of time Superman could circle the earth "+timeAround*3.5+ "times!");
console.log("In that amount of time Superman could circle the earth "+timeAround*3.5+ "times!");

//Calc to measure in feet
var feetAround = (earthCirc * timeAround);

//Calc to measure in miles
var milesAround = (feetAround/5280);

//Alert and C-Log users of new calculations
alert("This would be the equivalent of "+milesAround+ "feet!");
console.log("This would be the equivalent of "+milesAround+ "feet!");



