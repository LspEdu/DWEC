function getVectorImpar(){
    let x = [];
    for(var i = 0; i <= 21; i++){
        if(i%2 != 0)x.push(i);
    }
    return x;
}
document.getElementById("arr").value=getVectorImpar();