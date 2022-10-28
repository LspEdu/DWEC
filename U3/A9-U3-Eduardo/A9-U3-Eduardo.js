function texto(){
    var divi = document.getElementById("divi");
    var texto = (document.getElementById("texto").value).split(/\s+/);
    divi.innerText=`La primera palabra es ${texto[0]}, la última es ${texto[texto.length-1]}, y hay un total de ${texto.length} palabras.`;
}