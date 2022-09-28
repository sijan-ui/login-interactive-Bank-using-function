
//event handler
//step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2 input field id catch call the function
    const depositeTotalAmount = getInputFieldValueById('deposit-field');

    //check Number
    if(isNaN(depositeTotalAmount)){
        alert('Give me a number');
        return;
    }

    //step-3 deposit inner text collect
    const previousTotalAmount = getTextElementValueById('deposit-total'); 
    
    //step-4 set value
    const depositeUpdateTotalAmount = depositeTotalAmount + previousTotalAmount;
    setElemenmtValueById('deposit-total', depositeUpdateTotalAmount);

    //step-5 totalBanlance calculate
    const previousTotalBanalance = getTextElementValueById('update-amount');

    // step-7 set value and update 
    const updateTotalAmount = previousTotalBanalance + depositeTotalAmount;
    setElemenmtValueById('update-amount', updateTotalAmount);
})