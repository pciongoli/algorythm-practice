// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
   for (var i = 0; i < arr.length; i++) {
      // set local variable to current number in arr
      var arrNumber = arr[i];

      // if else statement to determine Fizz/Buzz
      if (arrNumber % 15 === 0) {
         console.log("Fizz Buzz");
      } else if (arrNumber % 3 === 0) {
         console.log("Fizz");
      } else if (arrNumber % 5 === 0) {
         console.log("Buzz");
      } else {
         console.log(arrNumber);
      }
   }
};
