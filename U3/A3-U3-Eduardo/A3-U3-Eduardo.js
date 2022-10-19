function edad() {
    let fecha = new Date(document.getElementById("nac").value);
    const fechaActual = new Date();
    var respuesta2 ="";
    var respuesta3 ="";
    let dias = fechaActual.getDay() - fecha.getDay();
    if(dias < 0)var meses = fechaActual.getMonth() - fecha.getMonth() + 1;
    else {
        var meses = fechaActual.getMonth() - fecha.getMonth();
        var respuesta2 = `${meses} meses,`;
    }
    if(meses < 0) var años = fechaActual.getFullYear() - fecha.getFullYear() + 1;
    else {
        var años = fechaActual.getFullYear() - fecha.getFullYear();
        var respuesta3= `Tienes ${años} años, `
    }
  console.log(respuesta3 + respuesta2 + `${dias} días`);

}