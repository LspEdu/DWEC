function getVectorImpar(){
    let x = [];
    for(var i = 0; i <= 21; i++){
        if(i%2 != 0)x.push(i);
    }
    return x;
}
var vector = getVectorImpar();
function buscar(x){
    if(vector.includes(parseInt(x))){
        document.getElementById("find").value="0";
        let z = vector.indexOf(parseInt(x));
        alert("Encontrado en la posición: "+z);
    }
    else{
        alert(`${x} no se encuentra en el vector`);
    }
    
}
document.getElementById("arr").value= vector;
document.getElementById("sum").value=vector.reduce((a,b)=>a+b,0);
document.getElementById("asc").value= vector;
vector.reverse();
document.getElementById("inv").value= vector;
document.getElementById("desc").value= vector;
vector.reverse();
