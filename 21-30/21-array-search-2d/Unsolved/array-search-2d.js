// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

// 2d array is an array where each element is an array

// we need a count variable
// we need to loop through outer array
// we need to loop through each inner array
// if the current index of the outer array and the current index of the inner array eaquals ="X"
// add one to the count
// return the count when loop is complete

var arraySearch2D = function (arr) {
   // count variable
   var count = 0;

   // first loop
   for (var i = 0; i < arr.length; i++) {
      // loop through inner array
      for (var k = 0; k < arr[i].length; k++) {
         if (arr[i][k] === "X") {
            count++;
         }
      }
   }
   return count;
};
