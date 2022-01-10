function palindrome(str) {
    if (str.toLowerCase().replace(/[\W_]/g, "") === str.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("")) {
      return true;
    } else {
      return false
    }
  }
  
  palindrome("five|\_/|four");