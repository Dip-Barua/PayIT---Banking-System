document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();



const cashIn = document.getElementById('input-add-money').value;
const cashInNumber = parseFloat(cashIn);
const pinNumber = document.getElementById('input-pin-number').value;

if(pinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber + cashInNumber ;

    document.getElementById('account-balance').innerText = newBalance ;
    cashIn.value = '';
    pinNumber.value = '';

}
else{
    alert('Invalid Pin Number');
    cashIn.value = '';
    pinNumber.value = '';

}
});