function escribir(num){
    document.getElementById("oper").value+=num;
}
function borrar(){
    document.getElementById("oper").value="";
}
function borrar_uno(){
    var p = document.getElementById("oper").value;
    p = p.slice(0,-1);
    document.getElementById("oper").value = p;
}
function salir(){
    confirm("¿Quieres salir?") ? document.getElementById("tabla").innerHTML="": borrar();  
}
function calcular(){
    var calculo = document.getElementById("oper").value;
    var res = eval(calculo);
    document.getElementById("resul").value = res;
    document.getElementById("oper").value="";
}
