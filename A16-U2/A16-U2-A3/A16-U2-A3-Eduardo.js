function investigar() {
    let x = document.getElementById("room");
    let hab = x.value;
    let nhab = x.options[x.selectedIndex].text;

    let y = document.getElementById("murder");
    let mur = y.value;
    let nmur = y.options[y.selectedIndex].text;

    const arma = []
    arma[1] = "veneno";
    arma[2] =  "trofeo";
    arma[3] = "palo de billar";
    arma[4] = "cuchillo";
    
    let resuelto = false;
    if(hab == mur) resuelto = true;
    
    if(resuelto) alert(`${nmur} lo hizo en el ${nhab} con el ${arma[hab]}`);
}