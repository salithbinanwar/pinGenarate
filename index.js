function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        console.log('shorter pin', pin);
        return getPin();
    }


}
    // display genarated pin
function genaratePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}
// handle calculator button
const buttonContainer =  document.getElementById('digit-container')
buttonContainer.addEventListener('click',function(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if(digit === 'C'){
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
    } else {
        const typedInput = document.getElementById('typed-pin');
         typedInput.value = typedInput.value + digit;

    }
})
// verify pin 
function verifyPin() {
        const pin = document.getElementById('pin').value;
        const typedPin = document.getElementById('typed-pin').value;
        if (pin === typedPin) {
            const correct = document.getElementById('correctPin');
            correct.style.display = 'block';
        } else {
            const correct = document.getElementById('incorrectPin');
            correct.style.display = 'block';        
        }


}