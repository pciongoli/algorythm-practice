// Write code to add all the numbers in `arr` and return the total

// [ 3, 1, 5, 6 ]
// need variable to store sum
// need to loop through array
// while looping through array, add that number to sum variable
// return the sum

var sumArray = function (arr) {
   var sum = 0;

   for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   // return sum outside of loop
   return sum;
};

// test in browser
var numberArray = [3, 1, 5, 6];

console.log(sumArray(numberArray));
