class Cliente {
    constructor(nombre, telefono, correo) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.correo = correo;
    }
  
    comprar() {
      console.log("Compra realizada");
    }
  
    recibir() {
      console.log("Producto recibido");
    }
  }
  
  module.exports = Cliente;