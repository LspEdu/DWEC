function circulo(){
    var divi = document.getElementById("divi");
    var radio = document.getElementById("radio").value;
    var resul = Math.PI * radio;
    divi.innerHTML=toArea(resul);
    divi.style.border = "groove coral";
}
function toArea(X){
    return X.toFixed(2) + " cm2";
}

function triangulo(){
    var divi = document.getElementById("divi");
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var resul = (base * altura)/2;
    divi.style.border = "groove #12FFA3";
    divi.innerHTML=toArea(resul);

}