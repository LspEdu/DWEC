class Vehiculo {
    constructor(brand, model, color, year, cc, status, velocidad) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.cc = cc;
        this.status = status??false;
        this.velocidad = velocidad ??0;
    }
    escribirTabla() {
        const body = document.body,
            tbl = document.createElement('table');
        tbl.style.width = '700px';
        tbl.style.height = '400px';
        tbl.style.border = '1px solid black';
        tbl.style.margin = 'auto';

        for (let i = 0; i < 2; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 8; j++) {
                if(i == 1 && j == 7)break;
                const td = tr.insertCell();
                if(i == 0 && j == 0)td.appendChild(document.createTextNode(`Vehículo`));
                if(i == 0 && j == 1)td.appendChild(document.createTextNode(`Marca`));
                if(i == 0 && j == 2)td.appendChild(document.createTextNode(`Modelo`));
                if(i == 0 && j == 3)td.appendChild(document.createTextNode(`Color`));
                if(i == 0 && j == 4)td.appendChild(document.createTextNode(`Año`));
                if(i == 0 && j == 5)td.appendChild(document.createTextNode(`Cilindrada`));
                if(i == 0 && j == 6)td.appendChild(document.createTextNode(`Estado del motor`));
                if(i == 0 && j == 7)td.appendChild(document.createTextNode(`Velocidad`));
                if(i == 1 && j == 0)td.appendChild(document.createTextNode(this.brand));
                if(i == 1 && j == 1)td.appendChild(document.createTextNode(this.model));
                if(i == 1 && j == 2)td.appendChild(document.createTextNode(this.color));
                if(i == 1 && j == 3)td.appendChild(document.createTextNode(this.year));
                if(i == 1 && j == 4)td.appendChild(document.createTextNode(this.cc+"cc"));
                if(i == 1 && j == 5){
                    td.appendChild(document.createTextNode(this.arrancado()));
                    if(this.status)td.style.backgroundColor = 'lightgreen';
                    else td.style.backgroundColor = 'red';
                }
                if(i == 1 && j == 6)td.appendChild(document.createTextNode(this.velocidad+" Km/h"));
                td.style.border = '1px solid black';
                td.style.textAlign = 'center';
               if(i==0 && j==0) td.setAttribute('rowSpan','2')
            }
        }
        body.appendChild(tbl);
    }

    mostrarDatos() {
        let string = `Marca: ${this.brand}\nModelo: ${this.model}\nColor: ${this.color}\nAño: ${this.year}`;
        if (this.velocidad) string += `\nVelocidad: ${this.velocidad}Km/h`;
        alert(string);
    }
    acelerar(velocidad) {
        this.velocidad = velocidad;
    }
    arrancar() {
        if (!this.status) {
            alert(`El coche ${this.brand} ${this.model} ha arrancado`);
            this.status = true;
        }
        else {
            alert(`El coche ${this.brand} ${this.model} se ha parado`);
            this.velocidad = 0;
            this.status = false;
        }
    }
    arrancado(){
        if(this.status)return "Arrancado";
        else return "Apagado";
    }
    frenar() {
        if (!this.status) alert("El coche no puede frenar si no está arrancado");
        else {
            this.velocidad = 0;
            alert(`El coche ${this.brand} ${this.model} ${this.color} ha parado`)
        };
    }
}

let coche1 = new Vehiculo("Tesla", "X", "rojo", "2022", 0),
    coche2 = new Vehiculo("Ford", "Mustang", "Azul", "1999", 3000, true);


coche2.escribirTabla();
coche1.escribirTabla();

