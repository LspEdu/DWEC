function dni() {
    var dni = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var letra = dni[dni.length - 1];

    var numero = dni.slice(0, -1);

    if (numero.length > 8 || numero.length < 8) {
        document.getElementById("ans").innerHTML = "Error: Dni no válido";
    } else {
        var resto = numero % 23;
        console.log(letras[resto]);
        if (letras[resto] != letra.toUpperCase()) {
            document.getElementById("ans").innerHTML = "Error: Dni no válido";
        }
        else {
            document.getElementById("ans").innerHTML = "Dni Correcto";
        }
    }



}