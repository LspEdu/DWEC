var ejeX = 0,
    ejeY = 550;

document.addEventListener('keydown', (event) => {
    let pj = document.getElementById("pj"),
        div = document.getElementById("stage");
   
    switch (event.code){
        case "ArrowDown":
            if(ejeY >= 550)break;
            pj.style.top = (ejeY += 10)+ "px" ; 
            break;
            case "ArrowUp":
            if(ejeY <= 0)break;
            pj.style.top = (ejeY -= 10) +"px";
            break;
            case "ArrowLeft":
                if(ejeX <= 0) break;
                pj.style.left = (ejeX -= 10) + "px";
                break;
                case "ArrowRight":
                    if(ejeX >= 850)break;
                    pj.style.left = (ejeX += 10) + "px";
                    break;
                }
                for(let i = 0; ejeY != 550; i++ ){
                    setInterval(bajar(pj,i), 1000);
                    console.log(i);
                }
});

function bajar(pj,x){
    pj.style.top= (ejeY += x) + "px";
}
