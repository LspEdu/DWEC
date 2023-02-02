/**
 * 
 */


/************************************
*
* Funciones Generales
* 
************************************/


/**
 * Crea el contenedor de la actividad si no existe
 * Si existe lo borra para generar uno nuevo 
 */
function existeActividad(){
    if (document.getElementById("actividad")){  /* Selecciona la actividad y la borra si existe */
        content.removeChild(document.getElementById("actividad")); /* Borra el hijo seleccionado del objeto HTML con id content*/
    }
    
    // Crea el contenedor de la actividad
    var divac = document.createElement("div");
    divac.setAttribute("id", "actividad"); /*Crea el elemento div y le pone el atributo id con valor actividad */
    content.appendChild(divac); /**Se lo añade al nodo  content */
   
}

 /**
 * Recibe una cadena y devuelve la misma cadena con la primera letra en Mayúscula
 * @param {string} s 
 * @returns {string}
 */
function capitalize(s){
    return s.charAt(0).toLocaleUpperCase() + s.slice(1);
}


/************************************
*
* Actividad 6
* 
************************************/
function generaNueve(){   
    
    const ALUMNOS = [];
    const NUMALUM = 5;

    /************************************
     *
     * FUNCIONES LOCALES A LA ACTIVIDAD
     * 
     ************************************/
    /**
     * Genera la tabla de alumnos
     * @param {array} cabecera 
     * @param {array} cuerpo 
     */
    function crearTablaAlum(cabecera, cuerpo){
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla")) /**SI está la borra */
        }

        var tabla = document.createElement("table"); /**Crea el elemento tabla */
        tabla.setAttribute("id", "tabla"); /** Y le añade el atributo id con valor tabla */
        
        // genera la cebecera de la tabla
        var thead = document.createElement("thead");
        var tr = document.createElement("tr"); /**Genera los elementos thead y tr  */
        
        for (e of cabecera){ /** hace un bucle y crea un th por cada elemento de cabecera (e) */
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(capitalize(e));
            th.appendChild(nodoTexto); /**Lo añade al th y luego lo añade en la fila */
            tr.appendChild(th);
        }
        thead.appendChild(tr); /** Usa la fila para crear el thead y luego la añade a la tabla */
        tabla.appendChild(thead);
    
        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody"); 
        for (fila of cuerpo){ /** por cada fila del cuerpo crea una celda (td),  le añade un nodo de texto y luego lo añade a la fila */
            tr = document.createElement("tr");
            for (celda of fila){
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(celda);
                td.appendChild(nodoTexto);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    
        tabla.appendChild(tbody); /**Añade todas las filas a la tabla */
    
        actividad.appendChild(tabla); /**Añade el cuerpo a la tabla */
    
    }


    /**
     * Comprueba que ningun campo esté vacio
     * 
     * @param  {...any} re
     * @returns {boolean} true si hay alguno vacío
     */
    function comprobarRegistros(...re){ /**le manda un array y comprueba si está todo lleno */
        let interruptor = false;
        re.forEach(e =>{
            if(e === ""){
                interruptor = true; //Si encuentra uno vacío interruptor se vuelve true
            }
        }); 
        return interruptor;
    }

    /**
     * Almacena a los alumnos y sus notas 
     */
    function guardarAlumno(){
       var nombre = document.getElementById("alumno").value; //Coge todos los campos de los inputs
       var modulo1 = document.getElementById("modulo1").value;
       var modulo2 = document.getElementById("modulo2").value;
       var modulo3 = document.getElementById("modulo3").value;

       //Si algun campo está vacío rompe la secuencia de la función
       if (comprobarRegistros(nombre, modulo1, modulo2, modulo3)){
           alert("Ningún campo puede estar vacío") //Si ve que alguno de los campos está vacío no continúa
           return;
       }

       // comprueba si los campos esán en el tipo adecuado
       if (isNaN(nombre) && !isNaN(modulo1, modulo2, modulo3)){ 

            if ([modulo1, modulo2, modulo3].every(e => e >= 0 && e <= 10)){
                
                ALUMNOS.push([nombre,modulo1, modulo2, modulo3]); //Añade al array el alumno

                document.getElementById("alumno").value = "";
                document.getElementById("modulo1").value = "";
                document.getElementById("modulo2").value = ""; //Vacía los campos
                document.getElementById("modulo3").value = "";

                if (ALUMNOS.length >= NUMALUM ){ //Si hay 5 alumnos no se podrán meter más
                    alert("Todos los alumnos estan introducidos");
                    guardar.disabled = true; //Desactiva el botón de añadir y activa el de mostrar tabla
                    generarTabla.disabled = false;
                } 

            } else{
                alert("Error: Las notas deben estar comprendidas entre 0 y 10"); 
            }

       } else{
            if(!isNaN(nombre)){
                alert(`Dato incorreco: ${nombre} no es un nombre`);
            }
            if (isNaN(modulo1, modulo2, modulo3)){
                alert("Dato incorrecto: combruebe que en los modulos las notas sean números");
            }
       }


    }


    /************************************
     *
     * CREA EL CONTENIDO DE LA ACTIVIDAD
     * 
     ************************************/

    // Combrobamos que no existe el contenedor de la actividad si existe lo borramos 
    existeActividad();
   
    var actividad = document.getElementById("actividad");



    //Crea el enunciado
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("9. Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos. Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.");
    enunciado.appendChild(nodoTexto);
    actividad.appendChild(enunciado);
    
    //creamos el formulario
    const FORMULARIO = ["alumno", "modulo 1", "modulo 2", "modulo 3"];
   
    FORMULARIO.forEach(e =>{
        //creacion del label
        var p = document.createElement("p");
        var la = document.createElement("label");
        la.setAttribute("for", e.replace(" ", "")); // Crea el formulario en función de los elementos que le hayan pasado
        nodoTexto = document.createTextNode(`${capitalize(e)}: `); // Y añade los label a cada inputs en función del array 
        la.appendChild(nodoTexto);
        p.appendChild(la);
        
        
        //creacion de los inputs
        var inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("name", e.replace(" ", ""));   //Aquí crea los inputs 
        inp.setAttribute("id", e.replace(" ", ""));
        p.appendChild(inp);
        
        //Metemos todo en el div
        actividad.appendChild(p);
    });

    //Generamos los botones para enviar
    var guardar = document.createElement("input");
    guardar.setAttribute("type", "submit");
    guardar.setAttribute("id", "guardar"); 
    guardar.setAttribute("value", "Guardar");
    actividad.appendChild(guardar);

    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla");
    generarTabla.setAttribute("value", "Generar Tabla"); //Genera el boton de crear tabla
    generarTabla.setAttribute("disabled", "");
    actividad.appendChild(generarTabla);

    // listeners
    document.getElementById("guardar").addEventListener('click', guardarAlumno); //Añade el evento a cada botón

    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaAlum(FORMULARIO, ALUMNOS)
            });



    
}


/************************************
*
* Actividad 10 unidad 4
* 
************************************/
function generaTrece(){
    
    existeActividad();
    var actividad = document.getElementById("actividad");



    //Crea el enunciado
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("13. Utilice el código empleado para la generación de las instancias del objeto Vehículo, y modifíquelo para que los valores de cada una de sus propiedades se impriman en una tabla HTML. Utilice la generación de código HTML desde código JavaScript. Cada instancia del objeto debeocupar una línea y el valor de cadapropiedad debe ocupar una celda de dicha línea. El resultado debe ser similar a:");
    enunciado.appendChild(nodoTexto);
    actividad.appendChild(enunciado);
    
    var generarTabla = document.createElement("input");
    generarTabla.setAttribute("type", "submit");
    generarTabla.setAttribute("id", "generarTabla");
    generarTabla.setAttribute("value", "Generar Tabla");
    actividad.appendChild(generarTabla);

    /*************************
     * Funciones locales
     * 
     *************************/

     /**
      * Genera una tabla con los vehiculos
      * @param  {...any} vehiculos 
      */
    function crearTablaCoche(...vehiculos){
        debugger;
        
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla")) //Si existe la tabla la borra
        }
        
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");
        
        // genera la cebecera de la tabla
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        const CABECERA = ["Marca", "Modelo", "Color", "Año de fabricación"];
        
      
        for (e of CABECERA){
            var th = document.createElement("th"); //Crea una th por cada elemento del array CABECERA
            var nodoTexto = document.createTextNode(e);
            th.appendChild(nodoTexto);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);
    
        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody");
    
         for (let i = 0; i < vehiculos.length; i++){
            var tr = document.createElement("tr");
            
            for (const key in vehiculos[i]) {
                if (typeof vehiculos[i][key] != "function") {
                    var td = document.createElement("td");
                    nodoTexto = document.createTextNode(`${vehiculos[i][key]}`);
                    td.appendChild(nodoTexto);
                    tr.appendChild(td);
                }
                
            }
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        actividad.appendChild(tabla);
    
    }
    
    
    //Creamos los objetos
    function Vehiculo(marca, modelo, color,ano_fab){ 
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ano_fab = ano_fab;
        this.arrancar = function(){
                let texto = "El coche de marca " +  this.marca 
                + " modelo " + this.modelo
                + " color " + this.color
                + " ha arrancado";
        console.log(texto);
        }
    }
    
    var coche1 = new Vehiculo("Ferrari", "Scaglietti", "Rojo", "2010");
    var coche2 = new Vehiculo("BMW", "Z4", "Blanco", "2010");
    var coche3 = new Vehiculo("Seat", "Toledo", "Azul", "1990");
    var coche4 = new Vehiculo("Fiat", "500", "Verde", "1995");
    
    // listeners
 
    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaCoche(coche1, coche2, coche3, coche4)
            });

}

//Botones para generar las actividades
var boton6 = document.getElementById("ej6");
var boton10 = document.getElementById("ej10");
var content = document.getElementById("content");

boton6.addEventListener("click", generaNueve);
boton10.addEventListener("click", generaTrece);