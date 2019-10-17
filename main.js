var init=30;

document.addEventListener('keyup', balloonHandler);

function balloonHandler(event){
  event.preventDefault();
  var balloon = document.getElementById("balloon");
    switch (event.keyCode) {
        case 68:
          init=init-10;
            balloon.style.fontSize=init+"px";
        if (init <=0){
          balloon.textContent="Done";
          balloon.style.fontSize="30px";
          document.removeEventListener('keyup', balloonHandler);
        }   
    break;
        case 73:
        if(init>=60){
        balloon.textContent="💥";
        document.removeEventListener('keyup', balloonHandler);
    }
    else{
        init=init+10;
        balloon.style.fontSize=init+"px";
    }
    break;      
        
    }  
}

