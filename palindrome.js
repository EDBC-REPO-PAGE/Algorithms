function palindrome(str) {
  str = str.match(/[a-z]+|\d+/gi).join('');
  let inv = str.split('').reverse().join('');
  console.log( str,inv )
  return str.toLowerCase()===inv.toLowerCase();
}

palindrome("A man, a plan, a canal. Panama");