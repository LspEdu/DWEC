document.querySelectorAll('div').forEach(div => {
        div.addEventListener('click', () => {
            if(div.className == 'selected')div.setAttribute('class', 'no');
            else div.setAttribute('class','selected');
        })
    });

document.getElementById('oc').addEventListener('click', () => {
    let divs = document.querySelectorAll('div[class="selected"]');
    
    if(divs.length != 0){
        divs.forEach(div => {
            div.style.setProperty('display', 'none');
        })
    }
})

document.getElementById('re').addEventListener('click', () => {
    document.querySelectorAll('div').forEach(div => {
        div.style.setProperty('display', 'flex');
        div.setAttribute('class','no');
    })
})