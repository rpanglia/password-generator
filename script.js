// Assignment code here
//'0' - '9' => 48-57 in ASCII;;;; 'A' - 'Z' => 65-90 in ASCII;;;; 'a' - 'z' => 97-122 in ASCII needed?
//["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "?", "/", ",", "|", "{", "}", "[", "]", "<", ">", ",", ".", ":", ";", "`"]; 
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecial;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Once user clicks on "Generate Password" button, series of prompts for password criteria appear
//1. confirm length, 2. uppercase&confirm, 3. lowercase &confirm, 4. number, 5. special characters

// start the function
function generatePassword() {

  var confirmLength = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  console.log("Your password length is " + confirmLength);

  while(confirmLength <= 7 || confirmLength >= 129) {
    window.alert("UH OH! Your password length MUST be between 8-128 characters. Please choose a number between 8 and 128.");
    var confirmLength = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
    }

  if(confirmLength >= 8 || confirmLength <=128) {
    window.alert("Your password will have " + confirmLength + " characters in total.");
    console.log("Your password length is " + confirmLength);
  }

  var confirmUpperCase = window.confirm("Would you like to include upper case letters in your password (ex. A,B,C...)? Click 'OK' to confirm.");
  var confirmLowerCase = window.confirm("Would you like to include lower case letters in your password (ex. a,b,c...)? Click 'OK' to confirm.");
  var confirmNumber = window.confirm("Would you like to add numbers in your password (ex. 1,2,3...? Click 'OK' to confirm.");
  var confirmSpecial = window.confirm("Would you like to include special character's in your password (ex. !,@,#...)? Click 'OK' to confirm.");

}






/*
function getRandomLower() {
  return String.fromCharCode(console.log(Math.floor(Math.random() * 26) + 97));
}
console.log(getRandomLower());
*/