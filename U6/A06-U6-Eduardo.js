document.getElementById('des').addEventListener('click', () => {
    document.getElementById('but').childNodes.forEach(but =>  {
        if(but.nodeType != Text) but.disabled = true;
    });
})

document.getElementById('ac').addEventListener('click', () => {
    document.getElementById('but').childNodes.forEach(but =>  {
        if(but.nodeType != Text) but.disabled = false;
    });
})