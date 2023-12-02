class Factura {
    constructor(ID, metodoPago, fecha, valor, telefono, direccion) {
      this.ID = ID;
      this.metodoPago = metodoPago;
      this.fecha = fecha;
      this.valor = valor;
      this.telefono = telefono;
      this.direccion = direccion;
    }
  
    pagar() {
      console.log("Factura pagada");
    }
  
    calcularTotal() {
      return this.valor;
    }
  
    mostrarInfo() {
      console.log(`Factura ID: ${this.ID}, Valor: ${this.valor}, Fecha: ${this.fecha}`);
    }
  }
  
  module.exports = Factura;