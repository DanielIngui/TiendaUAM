// app.js

const readlineSync = require('readline-sync');

// Importa las clases
const Producto = require('./lib/Producto');
const TiendaUAM = require('./lib/TiendaUAM');
const Inventario = require('./lib/Inventario');
const Caracteristicas = require('./lib/Caracteristicas');
const Factura = require('./lib/Factura');
const Proveedor = require('./lib/Proveedor');
const Cajera = require('./lib/Cajera');
const Usuario = require('./lib/Usuario');
const Cliente = require('./lib/Cliente');

// Función para preguntar al usuario qué acción desea realizar
function menu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Imprimir instancia de Producto');
  console.log('2. Imprimir instancia de TiendaUAM');
  console.log('3. Imprimir instancia de Inventario');
  console.log('4. Imprimir instancia de Caracteristicas');
  console.log('5. Imprimir instancia de Factura');
  console.log('6. Imprimir instancia de Proveedor');
  console.log('7. Imprimir instancia de Cajera');
  console.log('8. Imprimir instancia de Usuario');
  console.log('9. Imprimir instancia de Cliente');
  console.log('0. Salir\n');
}

// Función principal
function main() {
  let continuar = true;

  while (continuar) {
    menu();

    const opcion = readlineSync.question('Se ingreso la opcion: ');

    switch (opcion) {
      case '1':
        const producto = new Producto('MarcaX', '$5000', 'Producto1', 10, 'Buena');
        producto.mostrarInfo();
        break;
      case '2':
        const tienda = new TiendaUAM('UbicacionX', '123-456', 'correo@example.com', ['Producto1', 'Producto2']);
        console.log(tienda.obtenerInventario());
        break;
      case '3':
        const inventario = new Inventario(1, 'Electrónico', 20000);
        console.log(`Perdida estimada: $${inventario.calcularPerdida()}`);
        console.log(`Ganancia estimada: $${inventario.calcularGanancia()}`);
        console.log(`Necesidad de reposición: ${inventario.determinarNecesidad()}`);
        console.log(`Precio de venta estimado: $${inventario.calcularPrecioVenta()}`);
        break;
      case '4':
        const caracteristicas = new Caracteristicas('Rojo', 'Grande', 'Multifunción', 2.5);
        caracteristicas.aprobar();
        break;
      case '5':
        const factura = new Factura(123, 'Tarjeta', '2023-01-01', 100000, '789-456', 'Calle Principal');
        factura.pagar();
        console.log(`Total de la factura: $${factura.calcularTotal()}`);
        factura.mostrarInfo();
        break;
      case '6':
        const proveedor = new Proveedor('ProveedorXYZ', '987-654', 'P001');
        proveedor.enviar();
        proveedor.mostrarInfo();
        proveedor.generarFactura();
        break;
      case '7':
        const cajera = new Cajera(1500, 'Turno Mañana', 'ARL-123');
        cajera.enviar();
        cajera.mostrarInfo();
        cajera.generarFactura();
        break;
      case '8':
        const usuario = new Usuario('Juan', '3201111222', 'juan@uam.com', 'U001');
        usuario.mostrarInfo();
        break;
      case '9':
        const cliente = new Cliente('Maria', '3122333444', 'maria@uam.com');
        cliente.comprar();
        cliente.recibir();
        break;
      case '0':
        continuar = false;
        break;
      default:
        console.log('Opción no válida. Por favor, elija una opción del menú.');
    }
  }
}

// Llama a la función principal
main();
