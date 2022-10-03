
function calcular_nota()
{
    var nota = document.getElementById("nota").value

    //Condicinador

    /*if(nota<5)
    {
        document.getElementById("div1").innerText="Has suspendido";
    }else
        {
            document.getElementById("div1").innerText= "Has aprobado";
        }*/

    nota<5 ? (respuesta = "Has suspendido") : ((nota < 7) ? respuesta = "Has aprobado" : ((nota >= 9) ? respuesta = "Has sacado un sobresaliente" : respuesta = "Has sacado un Notable" ) );

    document.getElementById("div1").innerText = respuesta;
}