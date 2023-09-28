let calculation = localStorage.getItem('calculation') || '';

console.log(calculation);
displayCalculation();

function updateCalculator(value) {
  calculation += value;
  // console.log(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation-field').innerHTML = calculation;
}