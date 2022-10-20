function mostrar_edad(){
    let fecha = new Date(document.getElementById("nac").value);
    alert(edad(fecha));
};

function edad(fecha) {
    const fechaActual = new Date();
    var respuesta = "";   
    let dias = fechaActual.getDate() - fecha.getDate();
    let meses = fechaActual.getMonth() - fecha.getMonth();
    let años = fechaActual.getFullYear() - fecha.getFullYear()
    if( fecha.getMonth() == fechaActual.getMonth() && fecha.getDate() == fechaActual.getDate()) respuesta = `Feliz cumpleaños, cumples ${años}`;
    else{    
        if(dias <= 0 &&  fecha.getMonth() != fechaActual.getMonth()) meses++;
        if(meses <= 0) años++;
        dias = Math.abs(dias);
        meses = Math.abs(meses);
        respuesta = `Tienes ${años} años`;
        if(meses != 0) respuesta += `, ${meses} meses`;
        if(dias != 0) respuesta += `, ${dias} días`;
   }
   return respuesta;
}