
function mult() { 
    document.getElementById("respond").innerHTML="";
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var flag = 0;

    if (num1 < num2){
        for (var d = num1 ; d <= num2  ; d++){
            var x = d / 8;
            if (x % 1 === 0){
                document.getElementById("respond").innerText += "  "  + d;
            }
        }
    } else if( num1 > num2 ) {
        for (var d = num2 ; d <= num1 ; d++){
            var x = d / 8;
            if (x % 1 === 0){
                document.getElementById("respond").innerText += "  "  + d;
            }
        }
    } else if( num1 == num2){ document.getElementById("respond").innerText = "Error: los números son iguales";}
}