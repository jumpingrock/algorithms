/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backward).
Otherwise it returns false.
 */

function isPalindrome(str){
	console.log(str);
	if (str.length <= 1) return true;
	return str[0] === str[str.length -1] && isPalindrome(str.substring(1, str.length-1))
}

console.log(isPalindrome('awesome'));  // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false