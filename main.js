// >> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
// Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
// Armar la estructura HTML del proyecto.
// Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
// Utilizar funciones para realizar esas operaciones.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
// >>Ejemplo:
// Calcular costo total de productos y/o servicios seleccionados por el usuario.
// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
// Calcular edad promedio de personas registradas.
// Calcular nota final de alumnos ingresados.



// Mensaje de Bienvenida
// alert("Hola y Bienvenido a la tienda del loco lope Por favor deslice hacia abajo para elegir su producto.")






let id = 0
// Inicia la compra  marcador
document.querySelector("#crearOb").addEventListener("click", () =>{
	
class Producto {  // <!-- constructor -->

	
	constructor(nombre, precio, categoria) {
		// <!-- propiedades del constructor -->
		this.id = id
		this.nombre = nombre
		this.precio = precio
		this.categoria = categoria
		
	}
		// Definir metodos
		
}
id++
const venta =  new Producto("lapiz",130,"libreria")

// imprimir en el html

const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];

let template = "";
arrayItem.forEach((item) => {
  template += `
    <li class="list">
        <b>nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `;
});
lista.innerHTML = template;
} );

// inicio de la compra gotita


let id2 = 0
// Inicia la compra  marcador
document.querySelector("#crearOb2").addEventListener("click", () =>{
	
class Producto {  // <!-- constructor -->

	
	constructor(nombre, precio, categoria) {
		// <!-- propiedades del constructor -->
		this.id2 = id2
		this.nombre = nombre
		this.precio = precio
		this.categoria = categoria
		
	}
		// Definir metodos
		
}
id2++
const venta =  new Producto("gotita",170,"libreria")

// imprimir en el html

const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];

let template = "";
arrayItem.forEach((item) => {
  template += `
    <li class="list">
        <b>nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `;
});
lista.innerHTML = template;


console.log(venta)


} );