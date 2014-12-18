/*
William Carey
SDI 1412
12-17-14
 */

//alert("Test to see if code is working");

/*
//Calculate the Area of a Rectangle
var width =5;
var height =6;
var area = calculateArea(width, height);
console.log("The area of the Rectangle is " +area);

function calculateArea(w,h)
{
    return w*h;
}
*/

/*
//Calculate the Circumference of a circle = C = pD)

var diameter = 5;
var pi= 3.14;
var Circ = calculateCirc(diameter, pi );
console.log("The circumference of the circle is "+Circ);

function calculateCirc(d,p)
{
    return d*p;
}
*/



// Stung! It takes 8.666666667 bee stings per pound to kill an animal

var weight = prompt("What is your weight?");
var stings = 8.666666667
var beeStings = calcBeeStings(weight, stings);
console.log("It takes "+beeStings+ " bee stings to kill this animal");

function calcBeeStings(w,s)
{
    return w/s;

}

