function palindrome(message){
  // wirte your code here
  var str = true
  for(var i = 0, j = message.length-1; i < message.length && j >= i; i++, j--) {
    if(message.charAt(i) != message.charAt(j)) {
      str = false
    }
  }
  return str
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true