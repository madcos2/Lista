/* Productos */
var productos = [
  {
    nombre: "Cinta negra Aisladora x1",
    precio: 50,
    imagen: "Cinta-negra.png",
  },
  {
    nombre: "Cinta de embalaje Moderna x1",
    precio: 75,
    imagen: "Cinta-embalaje.png",
  },
  {
    nombre: "Lapicera azul Bic x1",
    precio: 28,
    imagen: "bic-azul.png",
  },
  {
    nombre: "Fibron x1",
    precio: 45,
    imagen: "fibron.png",
  },
  {
    nombre: "Lapiz x12",
    precio: 150,
    imagen: "Lapiz.png",
  },

  {
    nombre: "Hiloo de cocer x12",
    precio: 200,
    imagen: "hiloCocer.jpg",
  },
  {
    nombre: "Cinta de papel mediana x1",
    precio: 120,
    imagen: "cinta-dePapel.png",
  },
  {
    nombre: "boligoma x1",
    precio: 50,
    imagen: "boligoma.png",
  },
  
];

/* Items Seleccionados */
var itemsSelec = [];
for (let i = 0; i < productos.length; i++) {
  itemsSelec[i] = false;
}

/* Carrito */
var carrito = [];

/* Precio Total */
var precioTotal = 0;

/* Agregar item al carrito*/
/* (en realidad se define TRUE en items seleccionados) */
function addToCart(prod) {
  itemsSelec[prod] = true;
}

/* Quitar item del carrito*/
/* (se define FALSE en items seleccionados) */
function removeFromCart(prod) {
  itemsSelec[prod] = false;
}

/* Actualizar carrito */
function updateCarrito() {
  carrito.splice(0, carrito.length); //Vaciar carrito
  //Recorre itemsSelec
  itemsSelec.forEach((element, index) => {
    if (element == true) {
      //si es TRUE -> agrega producto al carrito propiamentedicho
      carrito.push(productos[index]);
    }
  });
}

/* Maneja la accion de Agregar o Quitar producto */
function handleBtnProd(prodID, btnState) {
  let btnID = "btn" + prodID;
  let boton = document.getElementById(btnID);
  if (btnState == "disp") {

    addToCart(prodID);
    boton.classList.replace("disp", "noDisp");
    boton.innerHTML = "Quitar del carrito";
  } else {
    removeFromCart(prodID);
    boton.classList.replace("noDisp", "disp");
    boton.innerHTML = "Añadir al carrito";
  }
  updateCarrito();
}

/* Funcion Comprar */
var funcComprar = () => {
  let listaCompra = () => {
    let lista = document.getElementById("lista-compra"); //Agarramos la lista
    lista.innerHTML = ""; //La vaciamos "sobreescribiendo nada"
    
    carrito.forEach((element) => {
      //Para cada elemento del carrito creamos un nodo "li" con nombre y precio
      let item = document.createElement("li");
      item.innerHTML = element.nombre + ": $" + element.precio;
      lista.appendChild(item); //Se agrega cada nuevo item a la lista
      
    });
    console.log(carrito)  //muestra cuantas cosas compramos por consola
  };

  let calcTotal = () => {
    precioTotal = 0; //Borrar precioTotal
    carrito.forEach((element) => {
      precioTotal += element.precio; //añadir cada valor guardado en el carrito
    });
  };

  let dibujarTotal = () => {
    let pTotal = document.getElementById("precio-total"); //Tomamos el elemento "precio-total"
    pTotal.innerHTML = ""; //Borramos el precio html existente
    pTotal.innerHTML = "Total a pagar: $" + precioTotal; //Escribimos nuevo precio
  };
  
  listaCompra();
  calcTotal();
  dibujarTotal();
};


// Filtrar por $100

function myFunction() {
  alert("Se filtraron los productos por abajo de los $100")
  alert("se pueden ver por consola")
  const productosFiltrados = productos.filter( (el) => el.precio <= 100)
  console.log(productosFiltrados)
  }


///////////////////////////////////////////////////
/****** Crea elementos DOM al cargar pagina ******/
window.onload = () => {
  let contenedorProductos = document.getElementById("contenedor-productos"); //Selecciona contenedor de productos

  /*Iteración foreach para crear nodos correspondientes a los productos*/
  productos.forEach((element, index) => {
    let articuloDiv = document.createElement("div"); //Contenedor de cada articulo
    articuloDiv.className = "articulo";

    let nombreArticulo = document.createElement("h6"); //Nombre articulo
    nombreArticulo.className = "nombre-articulo";
    nombreArticulo.textContent = element.nombre;

    let imgArticulo = document.createElement("img"); //Imagen del producto
    imgArticulo.src = "img/" + element.imagen;
    imgArticulo.className = "img-articulo";

    let precioArticulo = document.createElement("p"); //Precio del articulo
    precioArticulo.className = "precio";
    precioArticulo.textContent = "Precio: $" + element.precio;

    let boton = document.createElement("button"); //Botón agregar/quitar

    boton.innerHTML = "Añadir al carrito";
    boton.className = "btn-añadir";
    
    boton.classList.add("disp");
    boton.id = "btn" + index;
    
    boton.addEventListener("click", () => {
      handleBtnProd(index, boton.classList.item(1));
    });

    //Agrega elementos al contenedor de articulo
    articuloDiv.appendChild(nombreArticulo);
    articuloDiv.appendChild(imgArticulo);
    articuloDiv.appendChild(precioArticulo);
    articuloDiv.appendChild(boton);

    //Finalmente agrega el articulo al contenedor general de productos
    contenedorProductos.appendChild(articuloDiv);
  });
};
//////////////////////////////////////////////////
