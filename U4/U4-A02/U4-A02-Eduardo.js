function getVector(/* x */){
 /*    if(x){
        var vector2 = [];
        x.sort((a,b)=>a-b);
        for(var u = 0; u < 10;){
            insertar_numero(vector2,u);
            if(vector2[u]!=x[0] || vector2[u] != x[9])u++;
        }
        return vector2;
    } */
    let vector = [];
    for(var i = 0; i < 10;i++){
        insertar_numero(vector,i);
    }
    return vector;
}

function insertar_numero(array, indice){
    let vaso = Math.floor(Math.random()*1000+1);
    if(indice==0) return array[indice]=vaso;
    for(var u = 0; u <= array.length;u++){
       if(array[u] == vaso) return insertar_numero(array,indice);
    }
    return array[indice]=vaso;
}
function pintar_vector(vector) {
    var div = document.getElementById("vector");
    vector.sort((a,b)=>a-b);
    for (var i = 1; i < vector.length-1; i++) {
        div.innerHTML += vector[i] + " | ";
    }
}
/* function getMin(vector){
    var min;
    for(var i = 0; i < vector.length; i++){
        if(i == 0)min=vector[i];
        if(vector[i] < min)min=vector[i];
    }
    return min;
}
function getMax(vector){
    var max;
    for(var i = 0; i < vector.length; i++){
        if(i == 0)max=vector[i];
        if(vector[i] > max)max=vector[i];
    }
    return max;

} */

    let vector = getVector();
    pintar_vector(vector);

/*     min = getMin(vector),
    max = getMax(vector), */





