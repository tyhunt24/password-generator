// ! arrays for the characters used in the password
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var nums = "0123456789".split("");
var characters = "`~-=[],./!@#$%^&*()_+{}|:<>?".split("")


// ! gets html button to manipulate it 
var generateBtn = document.getElementById("generate");

//function that gets a random character
function getRandom(array) {
  var randomNumber = Math.floor(Math.random() * array.length)
  var randomLetter = array[randomNumber]
  return randomLetter
}


