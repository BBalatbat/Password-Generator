//Uppercase Array
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Lowercase Array
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

//Numbers Array
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Special Characters Array
var Specials = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

//Function to choose password options
function chooseOptions() {
  //stores length of password
  var length = parseInt (
    prompt ('How many characters would you like your password to be?')
  );

  //checks that length is a number
  if (Number.isNaN(length)) {
    alert ('Please provide a number.');
    return null;
  }

  //sets minimum length to 8
  if (length < 8) {
    alert ('Password must be more than 8 characters')
    return null;
  }

  //sets maximum length to 129
  if (length > 128) {
    alert ('Password length must be less than 129 characters');
    return null;
  }

  //allows inclusion of special characters
  var allowSpecial = confirm (
    'Click OK to include special characters.'
  );

  //allows inclusion of numbers
  var allowNumbers = confirm(
    'Click OK to include numbers.'
  );
  
  //allows lowercase
  var allowLC = confirm (
    'Click OK to include lowercase letters.'
  )
  
  //allows uppercase
  var allowUC = confirm (
    'Click OK to include uppercase letters.'
  )

  //makes sure user selects at least 1 type of character
  if (
    allowSpecial === false &&
    allowNumbers === false &&
    allowLC === false &&
    allowUC === false
  ) {
    alert('Please select at least one character type');
    return null;
  }

  //stores user input
  var passwordOptions = {
    length: length,
    allowSpecial: allowSpecial,
    allowNumbers: allowNumbers,
    allowLC: allowLC,
    allowUC: allowUC
  };

  return passwordOptions;
}

//generates random element from array
function genRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//generates password from user input
function generatePassword() {
  var options = chooseOptions();
  //temporary storage during generation
  var result = [];

  //stores types of characters to include
  var possibleCharacters = [];

  //ensures the chosen types are used
  var guaranteedCharacters = [];

  //checks that options have been selected
  if (!options) return null;

  //adds special characters if selected
  //adds new random special character to guaranteedCharacters
  if (options.allowSpecial) {
    possibleCharacters = possibleCharacters.concat(Specials);
    guaranteedCharacters.push(genRandom(Specials));
  }

  //adds numbers if selected
  //adds new random special character to guaranteedCharacters
  if (options.allowNumbers) {
    possibleCharacters = possibleCharacters.concat(Numbers);
    guaranteedCharacters.push(genRandom(Numbers));
  }

  //adds lowercase if selected
  //adds new random lower-cased character to guaranteedCharacters
  if (options.allowLC) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(genRandom(lowerCase));
  }

  //adds uppercase if selected
  //adds new random upper-cased character to guaranteedCharacters
  if (options.allowUC) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(genRandom(upperCase));
  }

  //iterates over length and adds randomized characters from possibleCharacters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = genRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  //adds at least 1 element from guaranteedCharacters
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //transforms result into string
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//event listener for generate button
generateBtn.addEventListener("click", writePassword);
