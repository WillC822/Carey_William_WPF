/**
 * Created by DoC822 on 12/4/14.
 */
/*William Carey
 Scalable Data Infrastructures
 12/4/14
 */

//create a calculator to show the amount of miles traveled to work weekly, monthly, yearly

//ask user their name
var name = prompt("Please type in your name");

//say hello to user
alert ("Hello " +name+", Let's approximate how many miles your drive to work daily." );

//find users average drive
var averageDrive = prompt("What's your average miles driven to work daily?");

//how many times does user travel to and from work daily
var timesPerday = prompt("How many times do you drive to and from work daily",2);

//how many days in a work week
var daysWorked = prompt("How many days are in a work week?",5);

//How many days in a month
var averageDaysinmonth = 30;

//How many days in a year
var daysYear = 365;

//Create calculation to add up how many miles driven daily, monthly, and yearly
var totalDaily = averageDrive * timesPerday;
var totalMonthly = totalDaily * timesPerday;
var yearTotal = totalMonthly * daysYear;

//Create prompt to alert user to the amounts
console.log("Based on the information provided you drive " +totalDaily+ " miles daily,\n " +totalMonthly+ " miles monthly, and " +yearTotal+ " miles yearly.");
alert("Based on the information provided you drive " +totalDaily+ " miles daily,\n " +totalMonthly+ " miles monthly, and " +yearTotal+ " miles yearly.");