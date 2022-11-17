var words = [],
    first = "";
function add(){
    let x = document.getElementById("word");
    if(!x.value){
        return alert("Debes introducir al menos 1 carácter");
    }
    if(words.length==0)first=x.value;
    words.push(x.value);
    x.value="";
}
function ordAsc(x){
    return x.sort();
}
function ordDesc(x){
    return x.sort().reverse();
}
function palabras(){
    document.getElementById("arr").innerHTML=" Las palabras son: " + words;
    document.getElementById("rev").innerHTML="Al revés sería: "+words.reverse();
    words.reverse();
    document.getElementById("f").innerHTML  =" La primera palabra es "+first;
    document.getElementById("l").innerHTML  =" La última palabra es "+words[words.length-1];
    document.getElementById("n").innerHTML  =" El número de palabras es :"+words.length;
    document.getElementById("az").innerHTML =" Ordedanas de la A a la Z :"+ ordAsc(words);
    document.getElementById("za").innerHTML =" Ordenadas de la Z a la A :"+ ordDesc(words);

}