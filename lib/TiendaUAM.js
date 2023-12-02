class TiendaUAM {
    constructor(ubicacion, telefono, correo, inventario) {
      this.ubicacion = ubicacion;
      this.telefono = telefono;
      this.correo = correo;
      this.inventario = inventario;
    }
  
    obtenerInventario() {
      return this.inventario;
    }
  }
  
  module.exports = TiendaUAM;