//diposite function
//function for input value
function getInputFieldValueById(inputId){
    const inputIdCatch = document.getElementById(inputId);
    const inputTotalAmountString = inputIdCatch.value;
    const inputTotalAmount = parseFloat(inputTotalAmountString);
    inputIdCatch.value = '';
    return inputTotalAmount;
}

//function for innertex
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

//set text value
function setElemenmtValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}