function isPalindrome(str) {
 
  // Compare the original string with its reverse
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("mom"));      
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("Able was I ere I saw Elba"));

/* 
  Add your pseudocode here
*/

/*
  displays if one is a grown up or child based on age */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
