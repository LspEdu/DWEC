var ejeX = 0,
    ejeY = 0;
    
document.addEventListener('keydown', (event) => {
    var box = document.getElementById("box");
    alert(window.innerHeight)
    switch (event.code){
        case "ArrowDown":
            if(ejeY >= (window.innerHeight-140)){
            break;
            }
            box.style.top = (ejeY += 40)+ "px" ; 
            break;
        case "ArrowUp":
            if(box.style.top == "0px")break;
            box.style.top = (ejeY -= 40) +"px";
            break;
        case "ArrowLeft":
            box.style.left = (ejeX -= 40) + "px";
            break;
        case "ArrowRight":
            box.style.left = (ejeX += 40) + "px";
            break;


    }
});
