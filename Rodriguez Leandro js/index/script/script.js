/*
let edad = prompt("ingrese su edad")
while(edad >18 || edad <80){
    if(edad <18 || edad>100){
        alert("ACCESO DENEGADO")
        }
    }
*/
const contenedorProductos = document.getElementById("productos")
class Producto{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const producto1 = new Producto("mic-rode", "10000", "disponible")
const producto2 = new Producto("mic-dual", "13000", "disponible")
const producto3 = new Producto("mic-completo", "50000","disponible")
const producto4 = new Producto("set-completo", "100000", "disponible")
const producto5 = new Producto("mixer", "70000", "disponible")
const productos = [producto1, producto2, producto3, producto4, producto5];
console.table(productos)

let carrito = []

productos.forEach(() =>{
let boton = document.getElementsById("boton")
 boton.addEventlistener('click', ()=>{
    agregarAlCarrito(Producto.id)
    console.table(carrito)
})
})

