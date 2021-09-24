// Assignment code here
//'0' - '9' => 48-57 in ASCII;;;; 'A' - 'Z' => 65-90 in ASCII;;;; 'a' - 'z' => 97-122 in ASCII needed?
//["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "?", "/", ",", "|", "{", "}", "[", "]", "<", ">", ".", ":", ";", "`"]; 
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecial;
var password = "";
var avalChars = "";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Once user clicks on "Generate Password" button, series of prompts for password criteria appear
//1. confirm length, 2. uppercase&confirm, 3. lowercase &confirm, 4. number, 5. special characters

// start the function
function generatePassword() {

  var confirmLength = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  console.log("Your password length is " + confirmLength);

  while(confirmLength <= 7 || confirmLength >= 129) {
    window.alert("UH OH! Your password length MUST be between 8-128 characters. Try again.");
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

  if(confirmUpperCase === false && confirmLowerCase === false && confirmNumber === false & confirmSpecial === false) {
    window.alert("You MUST choose at least one of the 4 password criteria.");
    var confirmUpperCase = window.confirm("Would you like to include upper case letters in your password (ex. A,B,C...)? Click 'OK' to confirm.");
    var confirmLowerCase = window.confirm("Would you like to include lower case letters in your password (ex. a,b,c...)? Click 'OK' to confirm.");
    var confirmNumber = window.confirm("Would you like to add numbers in your password (ex. 1,2,3...? Click 'OK' to confirm.");
    var confirmSpecial = window.confirm("Would you like to include special character's in your password (ex. !,@,#...)? Click 'OK' to confirm.");
        //how to loop lines 59-62 and clean up code????  also where to add console log for the above 4 lines??
    }


    // can use .concat to merge 2 or more arrays
    
    if (confirmUpperCase) {
        avalChars += upperCase;
    }

    if(confirmLowerCase) {
        avalChars += lowerCase;
    }

    if(confirmNumber) {
        avalChars += number;
    }

    if(confirmSpecial) {
        avalChars += special;
    }
    


    for (var i = 0; i < confirmLength; i++) {
        //randomly select chars from chars added to availchars. Loop thru selecting of chars until matches confirm.length
        password += avalChars[Math.floor(Math.random() * avalChars.length)];
    }
        
  
    return password;
    
}
// **********QUESTION===HOW TO GET FIELD TO CLEAR BY CLICKING ON GENERATE PASSWORD BUTTON AGAIN!???



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


/* in function() =  generate password
    UNDER IN(CONFIRM all 4 === false)
    IN FOR LOOP:
    //randomly select chars from chars added to availchars. Loop thru selecting of chars until matches confirm.length
        password += avalChars[Math.floor(Math.random() * avalChars.length)];
        //var randomNumber = userInput[Math.floor(Math.random() * userInput.confirmLength)];
        //randomPassword.push(randomNumber);
        //password = password + userInput[Math.floor(Math.random() * userInput.confirmLength)];
        //console.log(randomNumber);

    AFTER RETURN func:
    console.log(userInput)

    var password = "";

    for (var i = 0; i <= confirmLength; i++) {
        var randomNumber = Math.floor(Math.random() * userInput.confirmLength);
        CUT---password = password + userInput[Math.floor(Math.random() * userInput.confirmLength)];
        console.log(password);
        return password;
    
    var finalpassword = password.join("");
    console.log(password);
    window.alert("Your Random Password is: " + finalpassword);
    return finalPassword;*/