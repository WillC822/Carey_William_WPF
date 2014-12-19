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
    var seconds= 60;
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

alert("Superman could travel around the earth" +timeAround+ "times in an hour." );

miles = (timeAround>hour) ? "Geez he's fast" : "I assumed he'd be faster";
console.log(miles);
alert(miles);

