class Usuario {
    constructor(nombre, telefono, correo, ID) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.correo = correo;
      this.ID = ID;
    }
  
    mostrarInfo() {
      console.log(`Usuario: ${this.nombre}, Teléfono: ${this.telefono}, Correo: ${this.correo}`);
    }
  }
  
  module.exports = Usuario;