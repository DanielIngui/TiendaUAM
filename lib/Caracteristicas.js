class Caracteristicas {
    constructor(color, tamaño, funcion, peso) {
      this.color = color;
      this.tamaño = tamaño;
      this.funcion = funcion;
      this.peso = peso;
    }
  
    aprobar() {
      console.log("Características aprobadas");
    }
  }
  
  module.exports = Caracteristicas;