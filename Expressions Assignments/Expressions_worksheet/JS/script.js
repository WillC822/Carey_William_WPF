/* William Carey
12/6/14
Expressions Worksheet
 */

// A=wl calculation to find the area of a rectangle

// set the width as a variable
var width = 8;

// set the length as a variable
var length = 7;

// set the variable to calculate the width times length
var area = width * length;

// set the console to show answer
console.log(area);



// Find and Print the circumference of a circle
// Calculate the circumference of a circle

var radius = 6;
const PI = 3.14159265;

//multiply 2, PI and the raius & assign to circ variable
var circ = radius *2 * PI;
//print out the output circumference
console.log("The circumfernce of the circle is" + circ);



//Dog years

//Enter in the variable for dog years
var dogYears= 7;

//Enter in the variable for human years
var humanYears = 30;

//Set the variable for sparkys age by dogYears times humanYears
var sparkysAge = dogYears * humanYears;

//print out sparkys age
console.log("Sparky is " +humanYears+ " human years old which is " +sparkysAge+ "in dog years.");


//Slice of Pie part 1
// Find the amount of slices each person can have at the party
//Find slices in a large pizza (12)
var slice = 12;

//People at the party
var partyPeople = 100;

//Number of Pizzas ordered
var pizzasOrdered = 25;

//Find equation to show how many slices each person can have
var results = (pizzasOrdered * slice)/partyPeople;

//Print out results
console.log("Each person ate " +results+  "slices of pizza at the party.");
alert("Each person ate " +results+  "slices of pizza at the party.");

//Slice of Pie part 2
// Find how many slices sparky gets to eat

var sparkysTake = results %;

// Print out results
console.log("Sparky got " +sparkysTake+ "slices of pizza.");


//Average shopping bill
//Create array with bill amounts
var shoppingBills = [40, 60, 100, 135, 160];
//Create a variable to catch total
var total = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4];
//Create a variable to calculate average bill
var averageBill = total/5;

//print out results
console.log("You have spent a total of " +total+ " on groceries over 5 weeks \n that is an average of " +averageBill+ "per week.");



//Discounts on an item
//Original Price = 100
var originalPrice = 100;

//Discount Percentage = .2;
var discount = .2;

//Description of Item
var item = ("coat");

//Sales tax Percentage = .06;
var salesTax = .06;

//Price w/otax = original price times discount
var priceNotax = originalPrice * discount;

//Price w/tax = priceNotax times salesTax
var priceWtax = priceNotax * salesTax

//print out results
console.log("Your " +item+ " was originally " +originalPrice+", but after a " +discount+", it is now " +priceNotax+ "without tax, and " +priceWtax+ "with tax.")



