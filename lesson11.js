/*4. Find the most frequent string in an array. Do not use predefined JavaScript functions.*/
var arrayo = ["hello", "hello", "hi", "hello", "hello", "test", "test"]

var hello_count = 0;
var hi_count = 0;
var test_count = 0;

for (var i = 0; i < arrayo.length; i++) {
	if(arrayo[i] === "hello"){
		hello_count++;
	} if(arrayo[i] === "hi"){
		hi_count++;
	} if(arrayo[i] === "test"){
		test_count++;
	};
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
};