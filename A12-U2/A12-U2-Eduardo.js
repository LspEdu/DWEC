var valores = [true, 5, false, "hola", "adios", 2];



function texto(){
    var txt = [];
    for(var i = 0 ; i < valores.length; i++ ){
        if(typeof(valores[i]) === 'string'){
            txt.push(valores[i]);
        }
    }
    if (txt[0] > txt[1]){
        document.getElementById("ans").innerHTML= `${txt[0]} es menor que ${txt[1]}`;
    }else {
        document.getElementById("ans").innerHTML= `${txt[1]} es menor que ${txt[0]}`;
    }
};
function bool(){

};
function num(){
    
};


