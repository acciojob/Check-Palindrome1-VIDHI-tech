// complete the given function

function palindrome(s){
	// Step 1: Convert the string to lowercase
  s = s.toLowerCase();

  // Step 2: Remove non-alphanumeric characters
  s = s.replace(/[^a-z0-9]/g, '');

  // Step 3: Check if the string is equal to its reverse
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
