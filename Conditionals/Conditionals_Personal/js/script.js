/**
 * Created by DoC822 on 12/11/14.
 */
/*
 William Carey
 SDI Section # 3
 Conditionals Personal
 12-11-2014
 */

//My baby is in NICU in the hospital, in order for him to leave he must pass a few goals

//My baby must be weigh at least 4lbs
//He must be breathing on his own
//He must eat on his own

//Leo is my babies name, he was born Nov 16 2014 at 2lbs, 6oz
var babyLeo = ("Leo");

alert(" " +babyLeo+ " is in the hospital, let's see what's it gonna take to get him out");

//set a variable for baby's weight
var babyWeight = 2.6;

//set variable to show any weight greater than 4lbs makes him good to go
for(var l=2.6 ; l<4; l++ ){
    console.log("" +babyLeo+ " is slowly gaining weight");
    console.log(babyWeight[l]);


//set variable to confirm baby eating
var babyEat = true;

//set variable to confirm baby's breathing on his own
var babyO= true;

//Prompt answer is baby breathing on his own
var babyOxy = prompt("Is " +babyLeo+ " breathing on his own?");

    if(babyOxy===""){
        //if left blank

        //Re-prompt for an answer
        babyOxy=prompt("Please answer, is" +babyLeo+ " breathing on his own?" );

//Prompt answer is baby eating on his own
var babyEating = prompt("Is " +babyLeo+ " eating on his own?");

//Is baby's weight greater than or equal to 5
if(babyWeight>=4 && babyEat===babyEating && babyO===babyOxy){
    console.log(" " +babyLeo+ " is doing great and you can take him home.");
    alert(" " +babyLeo+ " is doing great and you can take him home.");

}else{
    console.log(" " +babyLeo+ " isn't quite ready to go home yet.");
    alert(" " +babyLeo+ " isn't quite ready to go home yet.")
}}
