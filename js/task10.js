


inp1.addEventListener('change', e => {
    let name = document.createElement('div')
    container.appendChild(name);
    name.innerText = e.target.value;
    
})

inp2.addEventListener('change', e => {
    let lastName = document.createElement('h4')
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