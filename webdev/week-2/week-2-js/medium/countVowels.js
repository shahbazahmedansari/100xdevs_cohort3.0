/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let countVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();
  const arrLowerStr = lowerStr.split("");
  for (let i = 0; i < arrLowerStr.length; i++) {
    if (vowels.includes(arrLowerStr[i])) {
      countVowels++;
    }
  }
  return countVowels;
}

module.exports = countVowels;
