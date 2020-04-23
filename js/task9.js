let btn1 = document.querySelector('#btn1');
let i=0,j=0,k=0;
btn1.addEventListener('click', function(){
   
    back='rgb('+ i+','+j+','+ k+')';
    document.body.style.backgroundColor = back
    if(i<256){
        i+=15;
    }
    else if(j<256){
        j+=15;
    }
    else if(k<256){
        k+=15;
        
    }
    else{
        i=0,j=0,k=0
    }
    
}) 
