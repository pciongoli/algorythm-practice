// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

// need to print even numbers from 0 given the up to a given num argument

// var logEvenNums = function (num) {
//    for (var i = 0; i <= num; i++) {
//       // only console log even numbers
//       if (i % 2 === 0) {
//          console.log(i);
//       }
//    }
// };

// Alternate solution without the use of if statement
var logEvenNums = function (num) {
   for (var i = 0; i <= num; i += 2) {
      console.log(i);
   }
};
