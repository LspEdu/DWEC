function leer() {

    var trans = [];
    trans['casa'] = "house";
    trans['mesa'] = "table";
    trans['perro'] = "dog";
    trans['gato'] = "cat";
    var esp = document.getElementById("nombre").value;
    
    if (trans[esp.toLowerCase()]) {
        document.getElementById("ans").innerHTML = esp + " significa " + trans[esp.toLowerCase()];
    } else {
        document.getElementById("ans").innerHTML = "Error: no está en el diccionario";
    }




};