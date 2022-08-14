// Write code to create a function that accepts a string and returns the string in camelCase
// need to have first word lowercase
// all remaining words must be combined with first letter uppercase

var camelCase = function (str) {
   var result = "";
   var words = str.toLowerCase().split(" ");

   for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split("");

      if (i > 0) {
         // set first letter in remaining words to upperCase
         letters[0] = letters[0].toUpperCase();
      }

      // use addition assignment += to joint words
      result += letters.join("");
   }

   return result;
};
