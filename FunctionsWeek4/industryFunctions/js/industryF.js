/*
William Carey
SDI 1412
12.18.2014
 */


//alert("test to see if code works");


// Going to write code to determine the depriciation of a car.


//Code to find out how much car was worth when purchased
var car = prompt(" How much was your car worth when you first brought it?");

//Average car  depreciation is about 15% annually
var depriciation = .15;

//Create a while loop to make sure question is answered
while(car==="" || isNaN(car)){
    //reprompt user
    if(car===""){
        car=prompt ("Please answer the question. \nHow much was your car worth when you first brought it:");
    }
    else{
        car=prompt("Please provide an amount. \nHow much was your car worth when you purchased it:");
    }

}

//Find out how long car has been in persons possession
var years = prompt("What year did you buy your car? \n Please provide year as 19xx or 20xx.");

//Create a while loop to make sure question is answered
while(years==="" || isNaN(years)){
    //reprompt user
    if(years===""){
        years=prompt ("Please answer the question. \nWhen was your car purchased:");
    }
    else{
        years=prompt("Please provide an amount. \nWhen was your car purchased:");
    }

}
//Current Year
var currentYear = 2014;

//In order to find out how much to take off, CurrentYears - Years
var totyears=(currentYear-years);

//if statement to account for depreciation being more than the price of the car
if(totyears>7){
    //depreciation is over 100%, Car may have 0'd out
    console.log("There's no more value left in her car.");
    alert("There's no more value left in her car.");
}else if(totyears===7){
    //dependent on the make you may still be able to get some funds, maybe its a ferrari?
    console.log("There may be some value still left in your car, dependent on the make \n Check Kelly Blue Book to be sure");
    alert("There may be some value still left in your car, dependent on the make \n Check Kelly Blue Book to be sure");
}else{
    //
    console.log("There's still value in your car!");
    alert("There's still value in your car!");
}

//Depriciation equals years * .15
var annualDepriciation = (totyears*depriciation);

//Depriciation equals cars-(depreciation*years)
var totDep = (car*annualDepriciation);

//Final Depreciation is calculated by original price of the car minus the total depreciation
var finDep = (car-totDep);

//Final Depreciation
console.log(finDep);
alert(finDep);




//wanted to try to use a function to account for the following years.
/*function totDep (yrs,dep,){
    return(y*d)-c;
}





/*while(car==="" && isNaN(car)){

    if(car===""){
        car=prompt ("Please answer the question. \nHow much was your car worth when you first brought it:");
    }
    else{
        car=prompt("Please provide an amount. \nHow much was your car worth when you purchased it?");
    }


}

function totalDepreciation(){
    var adep =
}

while(isNAN(car)){
    //reprompt user
    car = prompt("Please answer the question. \n How much was your car worth when you first brought it?");
}
*/