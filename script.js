// ! arrays for the characters used in the password
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var specialCharacters = "`~-=[],./!@#$%^&*()_+{}|:<>?".split("")

// ! empty variables used later in the project
var possibleChar = [];//used to push all of the characters into one array
var possiblePass = ""; //used to create the final password


// ! gets html button to manipulate it 
var generateBtn = document.getElementById("generate");

// function that gets a random character
function getRandom(array) {
  var randomNumber = Math.floor(Math.random() * array.length)
  var randomChar = array[randomNumber]
  return randomChar
}

// ! function used to call all the prompts and return a password
function generatePassword() {
  // !prompt the user to enter how many characters they want their password to be
  var userInput = prompt("Between 8-128 how many characters would you like your password to be?")
  // if statement to have the user enters a number between 8 and 128
  if (userInput >= 8 && userInput <= 128) {
    // !lots of confirms to see what the user wants as their password
    var lowerCase = confirm("Would you like to have lowercase letters")
    var upperCase = confirm("Would you like to have uppercase letters")
    var nums = confirm("Would you like to have numbers letters")
    var characters = confirm("Would you like to have special characters letters")

    //confirms to make the user would like the different characters as their password
    if (upperCase === true) {
      possibleChar = possibleChar.concat(upperCaseLetters) //adds all of the uppercase letters to the end of the possibleChar array

    }
    if (lowerCase === true) {
      possibleChar = possibleChar.concat(lowerCaseLetters) //adds all of the lowercase letters to the end of the possibleChar array

    }
    if (nums === true) {
      possibleChar = possibleChar.concat(numbers) //adds all of the numbers to the end of the possibleChar array
    }
    if (characters === true) {
      possibleChar = possibleChar.concat(specialCharacters) //adds all of the special characters to the end of the possibleChar array

    } //if all of the confirms are false then it tells you need to enter at least 1
    if (characters === false && nums === false && lowerCase === false && upperCase === false) {
      alert("You need to press one as true")
    }
  } //if the user has less than 8 characters it needs to have more characters
  else if (userInput < 8) {
    alert("You need to have more characters")
  } //if the user has more than 128 characters needs to have less
  else {
    alert("you need to have less characters")
  }
  //loops through the users input of characters
  for (var i = 0; i < userInput; i++) {
    possiblePass = possiblePass + getRandom(possibleChar); //adds a single character to the password from the array possiblePass each time the loop condition is true 
  }
}

// !function to write the password to the screen
function writePassword() {
  generatePassword(); //calls the generate password function
  var password = document.querySelector("#password") // ! calls the id password to write the password to the screen
  password.textContent = possiblePass; // ! gets the possiblePass variable and writes it to the screen

}


// ! Add event listener to generate button so when the button is pressed writePassword function will be applied
generateBtn.addEventListener("click", writePassword);