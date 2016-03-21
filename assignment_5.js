for loop*/
/*var pets = ["dog", "cat", "bunny"]
var safari = ["monkey", "giraffe", "elephant"]
var animals = [pets, safari]

for (var i = 0; i < animals.length; i++){
	for (var j = 0; j < animals[i].length; j++){
		console.log(animals[i][j])
	}
};*/

/*while loop ~note to self: add if else statement*/

/*x = 99
while (x > 1){
	console.log(x + " bottles of root beer on the wall,")
	x--;
}

if (x = 1){
	console.log(x + " bottle of root beer on the wall")
	x
}*/

/*variable scope*/

/*var carName = "Volvo";

function myFunction() {
	var cityName = "Amsterdam";
	return carName + cityName;
}

console.log(myFunction())*/



/***Functions***/

/*1. Checks if a string is a palindrome. Do not use predefined JavaScript functions.*/
/*var word = "racecar";

function palindrome(stringY) {
	var myArray = stringY.split("");	
	console.log(myArray);
	for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
		for (var j = myArray.length; j > -1; j--) {
			console.log(myArray[j]);
			if (myArray[i]=myArray[j]) {
				alert("PALINDROME YA'LL")
			} else{
				alert("NAH")
			};
		};
	};
};
console.log(palindrome(word));
*/


/*2. Accepts a string as an argument and checks it for vowels.*/

/*var myString = "wesley snipes";

function checkForVowels(stringX) {
  console.log(stringX);
  var myUppercaseString = stringX.toUpperCase();
  var stringArray = myUppercaseString.split("");
  console.log(stringArray);
  for(var i = 0;i < stringArray.length;i++){
    if (stringArray[i] == "A" || stringArray[i] == "E" || stringArray[i] == "I" || stringArray[i] == "O" || stringArray[i] == "U") {
      console.log(stringArray[i]);
      console.log("Found a vowel");
    }
  }
}

checkForVowels(myString);*/

/*3. When a user's name is entered in a textbox and the user presses a button, an alert is displayed with the user's name.*/

/*$(document).ready(function() {
	$("#myBtn").click(function(){
		alert($("#input").val());
	});
});*/

/*4. Find the most frequent string in an array. Do not use predefined JavaScript functions.*/
/*var arrayo = ["hello", "hello", "hi", "hello", "hello", "test", "test"]

var hello_count = 0;
var hi_count = 0;
var test_count = 0;

for (var i = 0; i < arrayo.length; i++) {
	if(arrayo[i] === "hello"){
		hello_count++;		
	}else if(arrayo[i] === "hi"){
		hi_count++;
	}else if(arrayo[i] === "test"){
		test_count++;
	}
};

console.log(hello_count);
console.log(hi_count);
console.log(test_count);

if (hello_count > hi_count, hello_count > test_count) {
	console.log("hello is the winner");
} else if (hi_count > hello_count, hi_count > test_count) {
	console.log("hi is the winner");
} else if (test_count > hello_count, test_count > hi_count) {
	console.log("test is the winner");
} else {
	console.log("there is no clear winner");
};*/

/*5. Define a function `maxNum()` that takes two numbers as arguments and returns the largest of them. Use if-else logic and not a predefined JavaScript 
function.*/

/*function maxNum(x,y) {
	if (x>y){
		console.log(x);
	} else if (x=y){
		console.log("they are equal")
	} else {
		console.log(y);
	}
}

maxNum(5,5)
*/
/*6. Define a function `maxOfThree()` that takes three numbers as arguments and returns the largest. This should be done using if-else logic and 
not a predefined JavaScript function.*/

/*function maxOfThree(i,j,k) {
	if(i>j){
		console.log(i);
	}else if(i>k){
		console.log(i);
	}else if(j>i){
		console.log(j);
	}else if(k>i){
		console.log(k);
	}else if(j>k){
		console.log (j);
	}else(k>j){
		console.log(k);
	}
}

maxOfThree(1,2,3)*/

/*7. Write a function `translate()` that will double every consonant and lace an occurrence of 'o' in between.*/
/*function translate (){

}

var translation = "";
var myString = "A string";      
console.log(myString.split(""));
var splitArray = myString.split("");
for (var i = 0; i < splitArray.length; i++){
  var consonants = ["b", "c", "g", "n", "r", "s", "t"];
  console.log(splitArray[i]);
  if (consonants.indexOf(splitArray[i]) > -1 ) {
    // is a consonant
    translation = splitArray[i] + "o" + splitArray[i];
    console.log(translation);
  } else {
    translation = translation + splitArray[i]
    console.log(translation);
  }
}
translate(myString)*/

/*8. Define a function `sum()` and a function `multiply()` that sums and multiplies(respectively) all the numbers in an array of numbers.*/

function sum(){
	var numbOne = [1,3,5]
	for (var i = 0; i < numbOne.length; i++) {
		sum += numbOne[i]
	};
}

sum();

/*12. Write a `filterLongWords()` that takes an array of words and an integer `i` and returns the array of words longer than `i`. Do not use any predefined JavaScript functions.*/
/*function filterLongWords(myArray, myNumber){
  var newArray = [];
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].length > myNumber) {
       newArray.push(myArray[i]); // myArray[i];
    }
  }
  return newArray;
}

var number = 2;
var myArray = ["string1", "2", "three"];
console.log(filterLongWords(myArray, number));