// ! arrays for the characters used in the password
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var specialCharacters = "`~-=[],./!@#$%^&*()_+{}|:<>?".split("")

var possiblePass = "";

var possibleChar = [];
var guarChar = [];


// ! gets html button to manipulate it 
var generateBtn = document.getElementById("generate");

// function that gets a random character
function getRandom(array) {
  var randomNumber = Math.floor(Math.random() * array.length)
  var randomChar = array[randomNumber]
  return randomChar
} 

function generatePassword(){
  var userInput = prompt("Between 8-128 how many characters would you like your password to be?")
if(userInput > 8 && userInput < 128){
var lowerCase = confirm("Would you like to have lowercase letters")
var upperCase = confirm("Would you like to have uppercase letters")
var nums = confirm("Would you like to have numbers letters")
var characters = confirm("Would you like to have special characters letters")

if (upperCase === true){
  possibleChar = possibleChar.concat(upperCaseLetters)

}
if (lowerCase === true){
  possibleChar = possibleChar.concat(lowerCaseLetters)
 
}
if(nums === true){
  possibleChar = possibleChar.concat(numbers)

}
if(characters === true){
  possibleChar = possibleChar.concat(specialCharacters)
  
}
if (characters === false && num === false && lowerCase === false && upperCase === false){
  alert("You need to press one as true")
}
}
else if(userInput < 8){
  alert("You need to have more characters")
}
else{
  alert("you need to have less characters")
}


for(var i=0; i<userInput; i++){
  possiblePass = possiblePass + getRandom(possibleChar);
}
}

function writePassword() {
  generatePassword();
  var password = document.querySelector("#password")
  password.textContent = possiblePass;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
























