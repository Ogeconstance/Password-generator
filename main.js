// DOM Elements
const passwordDisplay =
document.getElementById('generatedPassword');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');

const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

const generateBtn = document.getElementById('generateBtn');

// Character sets
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numbersChars = '0123456789';
const symbolsChars = '!@#$%^&*()_+=-{}[]|:;<>?,./€';

// Change length display when the slider moves
lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});

// Generate password
function generatedPassword(){
    const length = parseInt(lengthInput.value);
    let characters = '';

    if (uppercaseCheckbox.checked) characters += upperChars;
    if (lowercaseCheckbox.checked) characters += lowerChars;
    if (numbersCheckbox.checked) characters += numbersChars;
    if (symbolsCheckbox.checked) characters += symbolsChars;

    if (characters.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar =
    characters[Math.floor(Math.random() *
    characters.length)];
        password += randomChar;
    }

    passwordDisplay.textContent = password;
}

// Generate on button click
generateBtn.addEventListener('click' ,
    generatedPassword);