function crono() {
    var miFecha = new Date();
    var horas = miFecha.getHours();
    var minutos = miFecha.getMinutes();
    var segundos = miFecha.getSeconds();
    var texto = document.getElementById('laHora');
    texto.innerHTML = horas + ':' + minutos + ':' + segundos + ':';
}
setInterval(crono, 1000);