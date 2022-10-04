
function imprFact() {
    var fact = parseInt(document.getElementById("fact").value);
    var cadena = "El factorial de " + fact + " es = ";
    for (var d = fact; d >= 1; d--) {
        if (d == fact) {
            var calculo = d;
        } else {
            calculo *= d;
        }
    }
    cadena += calculo;
    document.getElementById("respond").innerHTML = cadena;
}