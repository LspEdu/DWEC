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
    return "";
  }

function incrementCookie(cname) {
    document.cookie = cname + " = " + (parseInt(getCookie(cname))+1);
}

let cookie =  getCookie("vez") ;

if(cookie){
    incrementCookie("vez");
}else{
    document.cookie = "vez = 0";
    cookie = getCookie("vez");
}
cookie = getCookie("vez");
document.getElementById("cont").innerHTML = parseInt(cookie);
