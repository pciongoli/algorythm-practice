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

// Alternate soultion comparing letters in front of string to letters in back of string

// var isPalindrome = function (str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };
