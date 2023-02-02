 
const ALUMNOS = [];

document.getElementById('add').addEventListener('click', () => {
    addAlumn();
})

function addAlumn() {
    if(ALUMNOS.length <= 5){
        let alumno = []
        for (input of document.querySelectorAll('input')){
            if(input.value == "") {
                return alert("El campo "+ input.name + " no puede estar vacío")
            }
            alumno.push(input.value);
        }
        ALUMNOS.push(alumno);
    };
    if(ALUMNOS.length == 5) {
        console.log(ALUMNOS);
        crearTabla(ALUMNOS);
    }
}

function crearTabla(array) {
    let tabla = document.createElement('table');

    let thead = document.createElement('thead'),
        tr = document.createElement('tr');

    const HEAD = ['Nombre', 'Nota 1', 'Nota 2', 'Nota 3'];

    HEAD.forEach(element => {
        let th = document.createElement('th'),
            texto = document.createTextNode(element);
        th.appendChild(texto);
        tr.appendChild(th);
    })
    console.log(tr);
    thead.appendChild(tr);
    console.log(thead);
    tabla.appendChild(thead);

    let tbody = document.createElement('tbody');

    array.forEach(alumno => {
        let tr = document.createElement('tr');
        alumno.forEach(value => {
            let td = document.createElement('td'),
                texto = document.createTextNode(value);
    
            td.appendChild(texto);
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    })
    tabla.appendChild(tbody);

    document.body.appendChild(tabla);


}
