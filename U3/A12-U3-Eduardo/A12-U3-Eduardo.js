function finder(){
    let texto = document.getElementById("texto"),
        word = document.getElementById("word").value,
        divi = document.getElementById("divi");
    
    if(texto.value.search(word) == -1) return divi.innerHTML="No está esa palabra";

    console.log(texto.value.search(word));
    let size = word.length;
    texto.value=texto.value.replace(word,'dwecl');

    divi.innerHTML=`La palabra ${word} está en el texto, mide ${size} carácteres y ha sido sustituida por dwecl`;

    

}