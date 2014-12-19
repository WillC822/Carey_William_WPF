/*
 William Carey
 SDI 1412
 12.18.2014
 */

//alert("test to see if code works");

//What's your name?
var name = prompt("What is your name?");

//Hi how are you, let's figure out what to eat.
var hungry = prompt("Hi " +name+ " are you hungry,\nPlease answer Yes or No?");

//If the person is hungry and answers any variation of yes.
if(hungry==="YES"|| hungry==="Yes"|| hungry==="yes"){
    //See what they're in the mood for
    console.log("Great, let's see what you may be in the mood for?");
    alert("Great, let's see what you may be in the mood for?");
}else{
    //if n
    console.log("Well, maybe if you see what's to offer you may change your mind");
    alert("Well, maybe if you see what's to offer you may change your mind");
}
//Ask what the user is in the mood for.
var taste = prompt("Are you in the mood for BBQ, Fish Tacos, Fast Food, Italian, Japanese or Tex-Mex?");

//Where should we go to eat for dinner.
var restArray1 =["4Rivers","Jimmy Hulas","Zaxbys","Olive Garden","Kobe", "Chevys"];

//What are you in the mood for
var moodArray2 =["BBQ","Fish Tacos","Fast Food", "Italian", "Japanese","TexMex"];
/*
//How much are you able to spend
var price = prompt("Are you looking for someplace cheap, moderate or expensive");

var pricePoint=["cheap", "moderate", "expensive"];
*/
//Use a function to input all the answers and dependent on the answers given choose a corresponding restaurant
function restChoice(a,b,c,d,e,f){
    console.log();

    var a = moodArray2[0]=restArray1[0];
    var b = moodArray2[1]=restArray1[1];
    var c = moodArray2[2]=restArray1[2];
    var d = moodArray2[3]=restArray1[3];
    var e = moodArray2[4]=restArray1[4];
    var f = moodArray2[5]=restArray1[5];
    return restChoice(taste&&"a"||"b"||"c"||"d"||"e"||"f");
    }

console.log(restChoice())
