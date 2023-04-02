function isPalindrome(string) {
  
  return string === string.split('').reverse().join('');
}

/* 
  function isPalindrome(string) {
  const characters = string.split("");
  const reversedCharacters = characters.reverse();
  const reversedString = reversedCharacters.join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}
*/

/*
 This function takes a string as an argument,
  and then checks if the resulting string reads the same forwards and backwards using 
  the split(), reverse(), and join() methods. If the string is a palindrome, 
  the function returns true, otherwise it returns false.
  split method splits the input into an array of characters
  reverse method reverses the order of the elements in the array
  join then takes the new array elements and joins them back to a single string.
  the function then checks if the string is the same in both
*/

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
