class Inventario {
    constructor(ID, tipo, cantidad) {
      this.ID = ID;
      this.tipo = tipo;
      this.cantidad = cantidad;
    }
  
    calcularPerdida() {
      // Supongamos que la pérdida es el 10% de la cantidad actual
      const porcentajePerdida = 0.1;
      return this.cantidad * porcentajePerdida;
    }
  
    calcularGanancia() {
      // Supongamos que la ganancia es el 20% de la cantidad actual
      const porcentajeGanancia = 0.2;
      return this.cantidad * porcentajeGanancia;
    }
  
    determinarNecesidad(id) {
      // Supongamos que si la cantidad es menor a 10, hay necesidad de reponer
      const cantidadMinima = 10;
      return this.cantidad < cantidadMinima ? 'Reponer' : 'No es necesario';
    }
  
    calcularPrecioVenta(id) {
      // Supongamos que el precio de venta es el doble de la cantidad
      return this.cantidad * 2;
    }
  }
  
  module.exports = Inventario;