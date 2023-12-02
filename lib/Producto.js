class Producto {
    constructor(marca, precio, nombre, cantidad, calidad) {
      this.marca = marca;
      this.precio = precio;
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.calidad = calidad;
    }
  
    mostrarInfo() {
      console.log(`Producto: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}`);
    }
  }
  
  module.exports = Producto;
  