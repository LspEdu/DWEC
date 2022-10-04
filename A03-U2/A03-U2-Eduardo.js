
function mult() { 
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var flag = 0;
    if (num1 < num2) {
        for (var divi = num2; divi % 8 == 0; divi - 8) {
            console.log("si 1");
            document.getElementById("respond").innerText += divi;
        }
    } else if (num2 < num1) {
        console.log("si 2");
        for (var divi = num1; divi - 8 >= 8; divi - 8) {
           
            document.getElementById("respond").innerText += divi;
        }
    } else if (num1 == num2) {
      
        document.getElementById("respond").innerText = "Son iguales";

    }
}