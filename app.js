class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

vender(cantidad); {
    this.stock = this.stock - cantidad;
}

const hoodies = [];

hoodies.push(new Producto(" Hoodie Stranger", 1, 6000, "Blanco", 20));
hoodies.push(new Producto(" Hoodie Rick", 2, 6000, "Rojo", 20));
hoodies.push(new Producto(" Hoodie Peaky", 3, 5000, "Camel", 20));
hoodies.push(new Producto(" Hoodie Breaking", 4, 5000, "Azul", 20));

for (const hoodie of hoodies) {
    alert("ID (" + hoodie.id + ") - " + hoodie.nombre);
}

function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return ((precioPrenda * 1.21) * cantidadPrenda) + costoEnvio;
}

let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const hoodieBuscado = hoodies.find(hoodie => hoodie.id == prendaSeleccionada);

let cantidad = parseInt(prompt("Ingrese cantidad que quiere comprar:"));

const envio = 400;

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <= 4) {
    alert("El total de tu compra es: $" + calcularPrecio(hoodieBuscado.precio, cantidad, envio));
    alert("¡Enjoy it!")
    hoodieBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}