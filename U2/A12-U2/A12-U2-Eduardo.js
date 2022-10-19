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
    var bol = [];
    for(var i = 0 ; i < valores.length; i++ ){
        if(typeof(valores[i]) === 'boolean'){
            bol.push(valores[i]); 
        }
    }
    if(bol[0] == bol[1]){
        if(bol[0] == true){
            document.getElementById("ans").innerHTML="Los dos boolean son true";
        }else {
            document.getElementById("ans").innerHTML="Los dos boolean son false";
        }
    }else{
        document.getElementById("ans").innerHTML="Los dos boolean son distintos";
    }
};
function num(){
    var num = [];
    for(var i = 0 ; i < valores.length; i++ ){
        if(typeof(valores[i]) === 'number'){
            num.push(valores[i]); 
        }
    }
    document.getElementById("ans").innerHTML=`La suma de ${num[0]} + ${num[1]} es `+ (num[0] + num[1]);
};


