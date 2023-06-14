function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function evaluateExpression() {
  const expression = document.getElementById('display').value;
  const result = eval(expression);
  document.getElementById('display').value = result;
}

// Event listener for button clicks
const buttons = document.querySelectorAll('.calculator input[type="button"]');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const value = this.value;
    appendToDisplay(value);
  });
});

// Event listener for key presses
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Check if the key is a number or an operator
  if (/[0-9+\-*/]/.test(key)) {
    appendToDisplay(key);
  }
  
  // Check if the key is the Enter key or the = key
  if (key === 'Enter' || key === '=') {
    evaluateExpression();
  }
});
