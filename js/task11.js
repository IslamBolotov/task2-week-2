

 var i=0;
right.addEventListener('click', () =>{
    i+=100
    kvadrad.style.marginLeft = i+'px';
    kvadrad.style.marginRight = 'auto';

})

left.addEventListener('click', () =>{
    i-=100;
    kvadrad.style.marginLeft = i+'px';
    kvadrad.style.marginRight = 'auto';

})