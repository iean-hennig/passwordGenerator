
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lCaseValue;
var uCaseValue;
var numValue;
var specValue;
var passLengthValue;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passCriteria = [];

  var passLength = prompt("How many letters do you want in your password? 10-30");

  if (passLength >= 10 && passLength <= 30) {
    passLengthValue = parseInt(passLength);
  } else {
    alert("Please enter a valid number!");
    return generatePassword();

} 

  var lCase = confirm("Do you want to include lowercase letters?");
  var uCase = confirm("Do you want to include Uppercase letters?");
  var num = confirm("Do you want to include numbers?");
  var spec = confirm("Do you want to include special characters?");
  

//lowercase letters
if (lCase===true) {
  lCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   
  for (i = 0; i < lCaseValue.length; i++) {
    passCriteria.push(lCaseValue[i]);
  }
}
//uppercase letters
if (uCase===true) {
  uCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   for (i = 0; i < uCaseValue.length; i++) {
     passCriteria.push(uCaseValue[i]);
   }
}
//numbers 
if (num===true) {
  numValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   
  for (i = 0; i < numValue.length; i++) {
    passCriteria.push(numValue[i]);
  }
}
//special characters 
if (spec===true) {
  specValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  for (i = 0; i < specValue.length; i++){
    passCriteria.push(specValue[i]);
  }
}



    var newPassword = ""

    for (var i = 0; i < passLengthValue; i++) {
      newPassword += passCriteria[Math.floor(Math.random() * passCriteria.length)];
    }
    

    return newPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword();
});

