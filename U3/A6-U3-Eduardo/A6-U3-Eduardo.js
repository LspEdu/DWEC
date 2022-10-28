


function crono(UTC) {

    var miFecha = new Date();
    var horas = miFecha.getHours() + parseInt(UTC);
    var minutos = miFecha.getMinutes();
    var segundos = miFecha.getSeconds();
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    document.getElementById("hora").textContent =  `${horas} : ${minutos} : ${segundos}`;; 
}

    


//Por algun extraño motivo no lee HORA pero si le doy al boton SI LO LEE :)
//document.getElementById("hora").addEventListener("load", crono());

