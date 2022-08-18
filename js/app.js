const priceText = document.getElementById('price');
const priceString = priceText.innerText;
const price = parseFloat(priceString);


const inputText = document.getElementById('text-box');
const inputCode = inputText.value;
// console.log(inputCode);

document.getElementById('btn-click').addEventListener('click', function () {
    if (inputText.value == 'DOM') {
        let discount = (price * 30) / 100;
        priceText.innerText = discount;
    }

    else {
        alert('please enter a valid code');
    }
    inputText.value = '';
})

