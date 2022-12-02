const number = document.querySelector('.num');


console.log(number);
function increment(){
    number.textContent = `${Number(number.textContent) + 1}`;
}
function decrement(){
    number.textContent = `${Number(number.textContent) - 1}`;
}