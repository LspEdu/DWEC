document.addEventListener('DOMContentLoaded', () =>  {
    barras();
    document.getElementById('votar').addEventListener('click', añadir)

})



function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }

 // Llenará las barras dependiendo del Max Votos y Votos cada uno
 // lógica -> MaxVotos = 100%
function barras() {
    let maxVotos = getCookie("maxVotos") ? parseInt(getCookie("maxVotos")): 0;
    if(!maxVotos)return false;
    let ios = getCookie("ios") ? parseInt(getCookie("ios")): 0,
        and = getCookie("and") ? parseInt(getCookie("and")): 0,
        win = getCookie("win") ? parseInt(getCookie("win")): 0
        oth = getCookie("oth") ? parseInt(getCookie("oth")): 0,
        por = "";
    if(maxVotos != (ios+and+win+oth)) return borrar();
    else{

    por = ((ios*100)/maxVotos).toFixed(2);
    document.getElementById("b_ios").value = por;
    document.getElementById("p_ios").innerHTML = por;
    
    por = ((and*100)/maxVotos).toFixed(2);
    document.getElementById("b_and").value = por;
    document.getElementById("p_and").innerHTML = por;

    por = ((win*100)/maxVotos).toFixed(2);
    document.getElementById("b_win").value = por;
    document.getElementById("p_win").innerHTML = por;

    por = ((oth*100)/maxVotos).toFixed(2);
    document.getElementById("b_oth").value = por;
    document.getElementById("p_oth").innerHTML = por;
    }
}

//Añadirá un voto a la cookie y otro al MaxVotos
function añadir() {
    let input = document.querySelector('input[type="radio"]:checked');
    if(!input) return alert("Por favor seleccione uno");
    let id = input.id,
        maxVotos = getCookie("maxVotos") ? getCookie("maxVotos") : 0,
        votos = getCookie(id) ? getCookie(id) : 0;
    document.cookie = "maxVotos = "+ (parseInt(maxVotos)+1);
    document.cookie = id + " = "+ (parseInt(votos)+1);
    document.location.reload();
}

//Borra las cookies si entiende que los votos son distintos

function borrar() {
    document.cookie = "maxVotos = 0";
    document.cookie = "ios = 0";
    document.cookie = "and = 0";
    document.cookie = "win = 0";
    document.cookie = "oth = 0";
}
