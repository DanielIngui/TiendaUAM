class Proveedor {
    constructor(nombre, telefono, ID) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.ID = ID;
    }
  
    enviar() {
      console.log("Pedido enviado");
    }
  
    mostrarInfo() {
      console.log(`Proveedor: ${this.nombre}, Teléfono: ${this.telefono}`);
    }
  
    generarFactura() {
      console.log(`Factura generada para el proveedor ${this.nombre}`);
    }
  }
  
  module.exports = Proveedor;