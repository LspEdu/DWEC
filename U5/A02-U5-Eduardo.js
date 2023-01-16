var ejeX = 0,
    ejeY = 0;
    
document.addEventListener('keydown', (event) => {
    var box = document.getElementById("box");
   
    switch (event.code){
        case "ArrowDown":
            if(ejeY >= (window.innerHeight-140))break;
            box.style.top = (ejeY += 40)+ "px" ; 
            break;
        case "ArrowUp":
            if(ejeY <= 0)break;
            box.style.top = (ejeY -= 40) +"px";
            break;
        case "ArrowLeft":
            if(ejeX <= 0) break;
            box.style.left = (ejeX -= 40) + "px";
            break;
        case "ArrowRight":
            if(ejeX >= (window.innerWidth-140))break;
            box.style.left = (ejeX += 40) + "px";
            break;


    }
});
