function saludar(){
    var hora = new Date().getHours();
    var respuesta = "";
    if ( 6 <= hora < 12 ) respuesta = "Buenos días";
    if ( 12 <= hora < 20 )respuesta = "Buenas Tardes";
    if ( 20 <= hora || hora < 6) respuesta = "Buenas Noches";
    alert(respuesta);
}
saludar();