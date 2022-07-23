// Write code to return the largest number in the given array
// make first number in array starting point
// compare current number to max number
// if current number is largr than current max number it will be the new max number

var maxNum = function (arr) {
   var max = arr[0];

   for (var i = 0; i < arr.length; i++) {
      var currentNum = arr[i];

      if (currentNum > max) {
         max = currentNum;
      }
   }
   return max;
};
