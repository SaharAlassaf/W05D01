function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("").trim() == x.toLowerCase().trim()? true : false;
}