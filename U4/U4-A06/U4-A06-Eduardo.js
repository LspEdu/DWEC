var arr = [];

function add() {
    if (arr.length < 5) {

        var per = [
            document.getElementById("name").value,
            document.getElementById("not1").value,
            document.getElementById("not2").value,
            document.getElementById("not3").value,
        ]
        arr.push(per);
        if(arr.length == 5){
            show(arr);
            arr= [];
        };
    }
    else show(arr);
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
function show(x) {
    var table = document.getElementById("tabla");
    table.style.display="inline-block"
    table.innerHTML="";
    table.innerHTML="<tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th></tr>";
    generateTable(table, x);
    
}
