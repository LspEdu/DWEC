function texteo(){
    let texto = document.getElementById("texto").value,
        cIni = document.getElementById("cIni").value,
        cFin = document.getElementById("cFin").value,
        divi =  document.getElementById("divi");
    var texteo = texto.substring(
        texto.indexOf(cIni), 
        texto.indexOf(cFin)+1
    );
    if(texteo){
        divi.style.border='dotted blue';
        divi.style.width='fit-content';
        divi.style.padding='10px';
    }
    return divi.innerText=texteo;
}