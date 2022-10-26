function escribir(num){
    document.getElementById("oper").value+=num;
}
function borrar(){
    document.getElementById("oper").value="";
}
function borrar_uno(){
    document.getElementById("oper").value=document.getElementById("oper").value.slice(0,-1);
}
function salir(){
    confirm("¿Quieres salir?") ? document.getElementById("tabla").innerHTML="": borrar();  
}
function calcular(){
    document.getElementById("resul").value = eval(document.getElementById("oper").value);
    borrar();
}
