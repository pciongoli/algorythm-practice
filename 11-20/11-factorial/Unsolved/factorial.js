// Write code to create a function that returns the factorial of `num`
// factorial is product of all positive integers less than or equal to number
// 3 would be (1*2*3=6)

var factorial = function (num) {
   var result = 1;

   for (var i = num; i > 1; i--) {
      result = result * i;
   }

   return result;
};
