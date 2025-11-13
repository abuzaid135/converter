// 1. تعريف ثابت التحويل كما هو مطلوب في الواجب
const KM_TO_MILES_FACTOR = 0.621371;

// 2. الوصول إلى عناصر HTML للتحكم بها
const kmInput = document.getElementById('kmInput');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDisplay = document.getElementById('resultDisplay');

// 3. ربط زر "Convert" بحدث (الاستماع للنقرة)
convertBtn.addEventListener('click', convertKilometersToMiles);

// 4. ربط زر "Clear" بحدث (الاستماع للنقرة)
clearBtn.addEventListener('click', clearFields);

// 5. وظيفة التحويل الرئيسية
function convertKilometersToMiles() {
    // 5.1. أخذ القيمة من حقل الإدخال
    const kmValue = kmInput.value;

    // 5.2. التحقق من الإدخال (Input Validation)
    if (kmValue === "" || isNaN(kmValue) || kmValue < 0) {
        displayResult("Please enter a valid positive number.", true);
        return; // إيقاف الوظيفة
    }

    // 5.3. تحويل القيمة (النص) إلى رقم
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