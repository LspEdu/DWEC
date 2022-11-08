function crear_precio(){
    var num = document.getElementById("num");
    var iva = document.querySelector('input[name="IVA"]:checked') 
                ? document.querySelector('input[name="IVA"]:checked').value  
                :21;
    var divi = document.getElementById("divi");

    if(num.value != ''){
        style_correcto(num,divi);
        let h1 = document.getElementById("h1");
        let resul = ((num.value*iva)/100)+parseInt(num.value);
        h1.innerText=resul;
        console.log(resul)
    }
    else{
        alert("Debes de completar el Precio");
        style_error(num,divi);
    }
}
function style_correcto(num, divi){
    num.style="border-color: black";
    divi.style="display:flex";
    
}
function style_error(num, divi){
        num.style="border-color: red";
        divi.style="display:none";
        
}