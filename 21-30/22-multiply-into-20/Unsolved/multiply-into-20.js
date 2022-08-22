// need to write code that will take array of unique numbers
// return true if product of any two numbers is 20
// if else return false

// set constant to empty object
//  need a loop to cycle through current number in array
// if statement to check product and return true if = 20
// return false if product anything else

const multiplyInto20 = function (arr) {
   const numMap = {};

   for (let i = 0; i < arr.length; i++) {
      let currentNum = arr[i];

      let neededNumber = 20 / currentNum;

      if (numMap[neededNumber]) {
         return true;
      }
      numMap[currentNum] = true;
   }
   return false;
};
