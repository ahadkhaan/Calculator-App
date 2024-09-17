// Function to append values to the input field
function appendValue(value) {
    const inputField = document.getElementById('input');
    inputField.value += value;
}

// Function to clear the input field
function clearInput() {
    const inputField = document.getElementById('input');
    const resultField = document.getElementById('result');
    inputField.value = '';
    resultField.value = '= 0';
}

// Function to calculate the result
function calculate() {
    const inputField = document.getElementById('input');
    const resultField = document.getElementById('result');
    
    try {
        const result = eval(inputField.value); 
        resultField.value = '= ' + result; 
    } catch (error) {
        resultField.value = 'Error'; 
    }
}

// Function to remove the last character from the input field
function backspace() {
    const inputField = document.getElementById('input');
    inputField.value = inputField.value.slice(0, -1); 
}
