
let vector = [1,2];

Array.prototype.getVector = function(){
    for (var i = 0; i < 10; i++) {
        insertar_numero(this, i);
    }
};
function insertar_numero(array, indice) {
    let vaso = Math.floor(Math.random() * 1000 + 1);
    if (indice == 0){
        return array[indice] = vaso;
    } 
    for (var u = 0; u <= array.length; u++) {
        if (array[u] == vaso) return insertar_numero(array, indice);
    }
    return array[indice] = vaso;
}
function pintar_vector(x){
    var div = document.getElementById("vector");
    x.sort((a, b) => a - b);
    for (var i = 1; i < x.length - 1; i++) {
        div.innerHTML += x[i] + " | ";
    }
}
vector.getVector();


pintar_vector(vector);