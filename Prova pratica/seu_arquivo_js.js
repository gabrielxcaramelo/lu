const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
 
 

  if (isNaN(ageInYears)) {
    resultMessage.textContent = `${nome}, Por favor, insira uma data válida`;
  } else if (ageInYears >= 18) {
    resultMessage.textContent = `${nome}, Parabens você já é maior de idade,agora vc ja pode se alistar!`;
  } else {
    resultMessage.textContent = `${nome},Infezlimente você ainda é menor de idade, vc deve esperar um pouco para se alistar`;
  }
}
const nome = prompt("Qual é o seu nome?");
const resultado = `Olá, ${nome}!`;
console.log(resultado); 

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {

  window.location.reload();
});

checkButton.addEventListener('click', calculateAge);
