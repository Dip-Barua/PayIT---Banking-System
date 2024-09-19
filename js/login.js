document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '1234' && pinNumber === '1234'){
        console.log('User verified');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Username or Pin.')
    }
});