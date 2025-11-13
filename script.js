const KM_TO_MILES_FACTOR = 0.621371;

const kmInput = document.getElementById('kmInput');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDisplay = document.getElementById('resultDisplay');

convertBtn.addEventListener('click', convertKilometersToMiles);
clearBtn.addEventListener('click', clearFields);

function convertKilometersToMiles() {
    const kmValue = kmInput.value;

    if (kmValue === "" || isNaN(kmValue) || kmValue < 0) {
        displayResult("Please enter a valid positive number.", true);
        return;
    }

    const kmNumber = parseFloat(kmValue);
    const milesValue = kmNumber * KM_TO_MILES_FACTOR;
    const resultMessage = `${kmNumber} km is equal to ${milesValue.toFixed(2)} miles.`;

    displayResult(resultMessage, false);
}

function clearFields() {
    kmInput.value = "";
    displayResult("", false);
}

function displayResult(message, isError) {
    resultDisplay.textContent = message;
    
    if (isError) {
        resultDisplay.classList.add('error');
    } else {
        resultDisplay.classList.remove('error');
    }
}