/**
 * Created by DoC822 on 12/4/14.
 */
/*William Carey
 Scalable Data Infrastructures
 12/4/14
 */

//alert("testing connection")

//Expressions Wacky

//Calculate the amount of product in a given container?
alert("I can help calculate how many items are in a given container")

//What is in the container?
var item = prompt("First, what is in the container?");

//Ask the user the dimensions of the container?
var conLength = prompt("What is the length of the container?");
var conHeight = prompt("What is the height of the container?");
var conWidth = prompt("What is the width of the container?");

//What are the dimensions of the jars occupant?
var sizeHeight = prompt("What is the height of the " +item+ "?");
var sizeLength = prompt("What is the length of the " +item+ "?");



//Find the area available for the jar.
var totalCon = conLength * conWidth * conHeight;
//Find the area of the product.
var totalOcc = sizeHeight * sizeLength;

//Find the amount the jar can hold.
var approximateAmount = totalCon/totalOcc;

alert("Based on the information provided there are " +approximateAmount+ " " +item+ " in the jar");
console.log("Based on the information provided there are " +approximateAmount+ " " +item+ " in the jar");


