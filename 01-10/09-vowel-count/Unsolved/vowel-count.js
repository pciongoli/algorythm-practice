// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
   var result = 0;
   var vowels = ["a", "e", "i", "o", "u"];

   // start off by creating a loop that will loop through each letter in string
   for (var i = 0; i < str.length; i++) {
      // set all vowels to lowercase
      var letter = str[i].toLowerCase();

      if (vowels.indexOf(letter) !== -1) {
         result += 1;
      }
   }

   //    return
   return result;
};

// Alternate solution using logical OR (||) operator to check for each vowel
// var vowelCount = function (str) {
//   var result = 0;

//   for (var i = 0; i < str.length; i++) {
//     var letter = str[i].toLowerCase();

//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//       result += 1;
//     }
//   }

//   return result;
// };
