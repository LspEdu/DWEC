class Vehiculo{
    constructor(brand, model, color, year, cc){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.cc = cc;
        this.status = false;
        this.velocidad=0;
    }
    mostrarDatos(){
        let string =`Marca: ${this.brand}\nModelo: ${this.model}\nColor: ${this.color}\nAño: ${this.year}`;
        if(this.velocidad)string+=`\nVelocidad: ${this.velocidad}Km/h`;
        alert(string);
    }
    acelerar(velocidad){
        this.velocidad=velocidad;
    }
    engine(){
        if(!this.status){
           alert(`El coche ${this.brand} ${this.model} ha arrancado`);
            this.status=true;
        }
        else {
            alert(`El coche ${this.brand} ${this.model} se ha parado`);
            this.velocidad=0;
            this.status=false;
        }
    }
    frenar(){
        if(!this.status)alert("El coche no puede frenar si no está arrancado");
        else {
            this.velocidad=0;
            alert(`El coche ${this.brand} ${this.model} ${this.color} ha parado`)
        };
    }
}

let coche1 = new Vehiculo("Tesla", "X", "rojo", "2022", 0),
    coche2 = new Vehiculo("Ford", "Mustang", "Azul", "1999", 3000);

alert(coche1.brand);
alert(coche2.color);
alert(Object.keys(coche1));
coche1.engine();
coche1.engine();
coche1.acelerar(120);
coche1.mostrarDatos();

