// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
// automatically rule out (return false) strings that are not the same length
// need to compare strings that are the same length
// if anogram return true

var isAnagram = function (strA, strB) {
   if (strA.length !== strB.length) {
      return false;
   }

   var aLetterMap = {};
   var bLetterMap = {};
   var strLength = strA.length;

   for (var i = 0; i < strLength; i++) {
      var aLetter = strA[i];
      var bLetter = strB[i];

      aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
      bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
   }

   for (var key in aLetterMap) {
      if (aLetterMap[key] !== bLetterMap[key]) {
         return false;
      }
   }

   return true;
};
