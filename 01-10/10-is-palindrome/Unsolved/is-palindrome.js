// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
// write code that will go through each string
// if string is a palindrome return true
// if string is not a plaindrome return false

var isPalindrome = function (str) {
   var reversedString = str.split("").reverse().join("");

   // if/else statement returning result of palindrome
   if (reversedString === str) {
      return true;
   } else {
      return false;
   }
};
