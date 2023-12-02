class Cajera {
    constructor(sueldo, horarios, arl) {
      this.sueldo = sueldo;
      this.horarios = horarios;
      this.arl = arl;
    }
  
    enviar() {
      console.log("Pedido enviado");
    }
  
    mostrarInfo() {
      console.log(`Cajera, Sueldo: ${this.sueldo}, Horarios: ${this.horarios}`);
    }
  
    generarFactura() {
      console.log("Factura generada por la cajera");
    }
  }
  
  module.exports = Cajera;