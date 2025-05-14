
function appendValue(val) {
  document.getElementById('display').value += val;
}

function calculate() {
  try {
    let expression = document.getElementById('display').value;
    let result = eval(expression); 
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error'; 
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
