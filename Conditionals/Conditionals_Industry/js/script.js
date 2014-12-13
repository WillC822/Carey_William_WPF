/**
 * Created by DoC822 on 12/11/14.
 */

/*
 William Carey
 SDI Section # 3
 Conditionals Industry
 12-11-2014
 */

//alert("testing if the file is connected");

//Conditionals Industry

//Calculate paycheck based on hours worked.
alert("Let's find out what your paycheck is going to be.");

//Find out hours worked in pay period(Bi-Weekly)
var hoursWorked = prompt("How many hours did you work for your last 2 week pay period?\n Not including overtime.");

//Did they work ovetime also?
var overTime = prompt("Did you work any overtime?");

if(overTime == "yes");{
 //Find out time over
 var timeOver = prompt("How much overtime did you work?");
}
//Find out Hourly Pay
var hourlyPay = prompt("How much do you get paid hourly?");

//Calculate base pay
var basePay = hoursWorked*hourlyPay;

//Calculate base pay+time over
var overtimePay = timeOver*[1.5];

//

/*if(hoursWorked==80) console.log("Based on the information provided you will get a gross pay of " +basePay+ "!");{
 else
 if (overtime=true) hourlyPay*1.5+basePay==overTime;
alert("Based on the information provided you will get a gross pay of " +basePay+ "!");
console.log("Based on the information provided you will get a gross pay of " +basePay+ "!");
*/

if(){

}else


if(hoursWorked<=80){
 alert("Based on the information provided you will get a gross pay of " +basePay+ "!");
 console.log("Based on the information provided you will get a gross pay of " +basePay+ "!");
}else{
 alert("Based on the information provided you will get a gross pay of " +basePay+overtimePay+ "!");
 console.log("Based on the information provided you will get a gross pay of " +basePay+overtimePay+ "!");
}





