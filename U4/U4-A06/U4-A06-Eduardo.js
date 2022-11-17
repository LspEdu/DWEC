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
        if(arr.length == 5)show(arr);
        console.log(arr[0][1])
    }
    else show(arr);
}


function show(x) {
    var table = document.getElementById("tabla");
    
    
}
