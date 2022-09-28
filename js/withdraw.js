//add even handler
//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //step-2
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

     //check Number
     if(isNaN(newWithdrawAmount)){
        alert('Give me a number');
        return;
    }

    //step-3 add function withdraw
    const previousTotalWithdrawAmount = getTextElementValueById('withdraw-total');

    //step-5 catch total balance
    const totalBanlance = getTextElementValueById('update-amount');

    //balance check
    if(newWithdrawAmount > totalBanlance){
        alert('Do not sufficiant balance');
        return;
    }

    //step-4 set valu and update valu
    const updateWithdrawAmount = newWithdrawAmount + previousTotalWithdrawAmount;
    setElemenmtValueById('withdraw-total', updateWithdrawAmount);

    //step-6 set value and upadte value
    const upadteTotalAmount = totalBanlance - newWithdrawAmount;
    setElemenmtValueById('update-amount', upadteTotalAmount);

})