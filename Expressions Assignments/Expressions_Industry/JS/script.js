/**
 * Created by DoC822 on 12/4/14.
 */
/*William Carey
Scalable Data Infrastructures
12/4/14
 */

//Expressions Industry Calculator

//Introduction
alert("Hello, how much money would you like to make \n as a web designer?")
alert("Does $100,000 sound good to you?")

//Make a calculator to show the amount of hours or projects needed to make 100,000

//Ask the user whats the average amount of time it takes to complete work
var averageTime = prompt("How much hours does it take to complete \n a standard one page website?");

//Average amount charged per project
var averageProject = prompt["How much do you charge to complete a standard one page website?";

//Amount of hours in a year
var hoursYearly = 8765.81278;

//How many projects could the user complete in a year?
var yearlyProjects = hoursYearly/averageTime;

//Ask user how many projects they feel they would need to complete to reach $100,000 mark
var userProjection = prompt("How many projects do you feel you would need to complete \n in a years time to reach $100,000?");

//Provide user with amount of projects needed and how much more or less it was than their own projection
var finalProjection = yearlyProjects/100000;
var difference = finalProjection - userProjection

alert("Based on the information you provided you would need to complete "+finalProjection+ "\n in order to make $100,000 over the course of a year.");
alert("The difference based on your estimate was " +difference+ ".");
console.log("Based on the information you provided you would need to complete "+finalProjection+ "\n in order to make $100,000 over the course of a year.");
console.log("The difference based on your estimate was " +difference+ ".");