function edad() {
    let fecha = new Date(document.getElementById("nac").value);
    const fechaActual = new Date();
    let edad = Math.floor(((fechaActual-fecha)/1000) / (3600*24*365));
    alert(`Tienes ${edad} años`);
};