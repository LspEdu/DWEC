document.getElementById('add').addEventListener('click', () => {
    let add = document.getElementById('nodo').value ? document.getElementById('nodo').value : 0;
    añadir(add);
})


document.getElementById('del').addEventListener('click', () => {
    let main = document.getElementsByTagName('main')[0];
    let last = main.lastChild ? main.lastChild.textContent : false;
    if(last)main.removeChild(main.lastChild);
    else alert("No hay nada que borrar");
})


function añadir(x) {
    if(!x) return alert("Error, introduzca un dato");

    let main = document.getElementsByTagName('main')[0];

    let rama = document.createElement('div');

    let nodo = document.createTextNode("Nota = "+x)
    rama.appendChild(nodo);

    main.appendChild(rama);
    
   document.getElementById('nodo').value = ""; 
}