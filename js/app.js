const generatedPassword = document.querySelector(".generated-password")
const generateBtn = document.querySelector(".generate-button")
const countRange = document.querySelector("#count-range")
const charactersCount = document.querySelector(".characters-count")
const strengthStatus = document.querySelector(".strength-status")
const passwordProps = document.querySelectorAll(".password-prop")

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
const numberCharacters = "0123456789"
const symbolsCharacters = "!@#$%^&*()_-+=\|?/<>"

let availableCharacters = "";
let PowerOfPass = [];
let finalPassword = [];




function passwordMaker(){
  if (availableCharacters === ""){
    alert("لطفا تعیین فرمایید که گذرواژه از چه کاراکترهایی ساخته شود")
  } else {
    for (let i = 0 ; i < charactersCount.innerHTML ; i++){
      finalPassword.push (availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
    }
    ShowPassword()
    finalPassword = []
  }  
}

function ShowPassword () {
  generatedPassword.innerHTML = finalPassword.join("")
}


passwordProps.forEach(function(prop) {
  prop.addEventListener("click", function() {
    availableCharacters = "";
    PowerOfPass = [];

    passwordProps.forEach(function(p) {
      if (p.checked) {

        PowerOfPass.push(p.dataset.value)

        if (p.dataset.value === "uppercase") {
          availableCharacters += uppercaseCharacters;
        } if (p.dataset.value === "lowercases") {
          availableCharacters += lowercaseCharacters;
        } if (p.dataset.value === "numbers") {
          availableCharacters += numberCharacters;
        } if (p.dataset.value === "symbols") {
          availableCharacters += symbolsCharacters;
        } 
      }
    });

      if (PowerOfPass.length === 0) {
        strengthStatus.className = "strength-status";
      } if (PowerOfPass.length === 1) {
        strengthStatus.className = "strength-status very-bad";
      } if (PowerOfPass.length === 2) {
        strengthStatus.className = "strength-status bad";
      } if (PowerOfPass.length === 3) {
        strengthStatus.className = "strength-status good";
      } if (PowerOfPass.length === 4) {
        strengthStatus.className = "strength-status strong";
      }

  });
});


countRange.addEventListener("change" , function(){
  charactersCount.innerHTML = countRange.value
})

generateBtn.addEventListener("click" , passwordMaker)