

let btn1 = document.querySelector('#btn1');

let event = new Event('click');

btn1.addEventListener('click', function(){
    alert('Добро пожаловать!')
})

btn1.dispatchEvent(event);  


/*

//2 - version
let btn1 = document.querySelector('#btn1');
document.addEventListener('DOMContentLoaded',function(){
    alert('Welcome!')
})*/