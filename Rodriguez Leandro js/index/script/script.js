/*
let edad = prompt("ingrese su edad")
while(edad >18 || edad <80){
    if(edad <18 || edad>100){
        alert("ACCESO DENEGADO")
        }
    }
*/

class Producto{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const voz = new Producto("microfono", 17000, "disponible")
const interfaz = new Producto("mixer", 60000, "disponible")
const setup = new Producto("soporte", 15000,"disponible")
const video = new Producto("camara", 42000, "disponible")
const productos = [voz, interfaz, setup, video];
console.table(productos)

 
function resta(precioOriginal, descuentoProducto){
    return precioOriginal - precioOriginal*descuentoProducto%100;
}

let descuento = 10


do{
    codigo = prompt("ingrese su codigo")

    if(codigo == "proyectoJs"){
  
        productos.forEach((elemento)=> {
           elemento.precio = resta(elemento.precio, descuento) 
        });

      } else {
        alert("codigo incorrecto")
    }

}   while(codigo != "proyectoJs")

 console.table(productos)