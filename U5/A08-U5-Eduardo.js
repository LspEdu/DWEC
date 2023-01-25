
document.forms[0].addEventListener('submit',(x) => {
    select();
    ultimo()
});

document.querySelectorAll('.dias').forEach(chk => {
    chk.addEventListener('change', () => {
        last = chk.name;
    });
})

document.forms[0].elements.color.forEach(col => {
    col.addEventListener('change' , color);
});

let last;
function color() {
    let radios = document.querySelector('input[type="radio"][name="color"]:checked');
    document.body.style.backgroundColor = radios.id;
}

function select() {
    var sel = document.querySelector('select').value;
    switch (parseInt(sel)) {
        case 1:
            alert("Se enviará a Jesús");
            break;
        case 2:
            alert("Se enviará a Miguel Ángel");
            break;
        case 3:
            alert("Se enviará a Ricardo");
            break;
        case 4:
            alert("Se enviará a Rafael");
            break;
        case 5:
            alert("Se enviará a Andrés");
            break;
        case 0:
            alert("Por favor, seleccione una asignatura");
            break;

    }
}
function ultimo(){
    if(!last){
        return alert("Seleccione un día");
    }
    return alert("Su día preferente es = " + last);
}