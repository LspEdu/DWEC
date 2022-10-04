function tablas() 
{
    document.getElementById("ans").innerHTML = "";
    var num = document.getElementById("num").value;
    var cal = 0;
    for(var i = 0 ; i <= 10 ; i++)
    {
        cal = num * i;
        document.getElementById("ans").innerText+="\n "+num+ " x "+ i + "  = " + cal;

    }


    /*tbl = document.getElementById("tabla");
    tblBody = document.createElement("tbody");

    for (let j = 0; j <=10 ; j++)
    {
        row = document.createElement("tr");
        
        for (let i = 0; i < 3; i++)
        {
            cell = document.createElement("td");
            cellText = document.createTextNode(`$  ${i}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);

    }

    tbl.appendChild(tblBody);
*/
  


}