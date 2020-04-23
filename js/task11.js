

 var i=0;
right.addEventListener('click', () =>{
    i+=100
    kvadrad.style.marginLeft = i+'px';
    kvadrad.style.marginRight = 'auto';
    kvadrad.style.transition = '1s'
})

left.addEventListener('click', () =>{
    i-=100;
    kvadrad.style.marginLeft = i+'px';
    kvadrad.style.marginRight = 'auto';
    kvadrad.style.transition = '1s'
})