/* let inpEmail = document.querySelector('#');
let inpText = document.querySelector('.inp-text');
let btn2 = document.querySelector('#btn-2'); */
/* let name = document.querySelector('.name');
let email = document.querySelector('.email');
 */
let name = document.createElement('div')
inp1.addEventListener('input', e => {
    container.appendChild(name);
    name.innerText = e.target.value;
    
})

let lastName = document.createElement('h4')
inp2.addEventListener('input', e => {
    container.append(lastName);
    lastName.innerText = e.target.value;
   
})

let k = document.createElement('h2');
btn1.addEventListener('click', e => {
    if(inp1.value == '' || inp2.value == ''){
    e.preventDefault();
    document.body.append(k);
    k.innerText = '------Ошибка-------';
    }
    else{
        e.preventDefault()
        inp1.value='';
        inp2.value='';
    }
})