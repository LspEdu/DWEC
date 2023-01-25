document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('change' ,comprobar);
    input.addEventListener('focus',() => {
        input.style.backgroundColor = "white";
    })
});

document.forms[0].addEventListener('submit', passwords);

document.getElementById('ver').addEventListener('click', enseñarCookies);

function comprobar(event) {
    let input = event.currentTarget,
        nombre = input.name,
        valor = input.value,
        expr;
    switch (nombre) {
        case "nombre":
            expr =/^\w+\s\w+(\s(\w+(\s\w+)?)?)?$/;
            break;
        case "dni":
            expr = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/;
            break;
        case "fechaNacimiento":
            expr = /^\d{2}\/\d{2}\/\d{4}$/;
            break;
        case "email":
            expr = /^\w{3,}@\w{3,}\.\w{2,3}$/;
            break;
        case "pagweb":
            expr = /^(http|https):\/\/www\.\w{4,}\.\w{2,3}$/;
            break;
        case "contraseña":
        case "confirmarcontraseña":
            expr = /\d{8,10}/;
            break;
    }
    expresion(valor, expr, input);

}

function expresion(valor, expr, input) {
    if(!expr.test(valor)){
        alert("Por favor, cumpla el formato en el campo " + input.name.toUpperCase());
        input.style.backgroundColor= "red";
        input.value = "";
    }else{
        document.cookie = input.name+"="+input.value;
    }

}

function enseñarCookies() {
   alert(document.cookie)
}

function passwords() {
    let pwd = document.getElementById('contraseña'),
        cpwd = document.getElementById('confirmarcontraseña');
    if(pwd != cpwd) return alert("Las contraseñas no coinciden");
}
