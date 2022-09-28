//step-1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 get the email address inside the email input field 
    // alwas remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //Do NOT VERIFY email password on the client side
    // step-4 verify email and password 
    if(email === 'sijanblock@gmail.com' && password === '****....'){
        // location change handeler 
       window.location.href = 'bank.html';
    }
    else{
        alert('Wrong email and password')
    }

})