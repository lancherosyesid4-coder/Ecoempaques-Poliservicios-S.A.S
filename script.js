/* =========================
ABRIR PRODUCTO
========================= */

function abrirProducto(nombre, descripcion){

const modal = document.getElementById("modalProducto");
const titulo = document.getElementById("tituloProducto");
const texto = document.getElementById("descripcionProducto");

titulo.innerText = nombre;
texto.innerText = descripcion;

modal.style.display = "flex";

}


/* =========================
CERRAR MODAL
========================= */

function cerrarModal(){

document.getElementById("modalProducto").style.display = "none";

}


/* =========================
REALIZAR PEDIDO
========================= */

function hacerPedido(){

let producto = document.getElementById("tituloProducto").innerText;
let tamano = document.getElementById("tamano").value;
let cantidad = document.getElementById("cantidad").value;

if(cantidad === "" || cantidad <= 0){

alert("Ingrese una cantidad válida");
return;

}

let pedido = {

producto: producto,
tamano: tamano,
cantidad: cantidad

};

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

pedidos.push(pedido);

localStorage.setItem("pedidos", JSON.stringify(pedidos));

alert("Pedido agregado correctamente");

cerrarModal();

}


/* =========================
CARGAR PEDIDOS EN PANEL
========================= */

function cargarPedidos(){

let tabla = document.getElementById("tablaPedidos");

if(!tabla) return;

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

tabla.innerHTML = "";

pedidos.forEach(p => {

tabla.innerHTML += `
<tr>
<td>${p.producto}</td>
<td>${p.tamano}</td>
<td>${p.cantidad}</td>
</tr>
`;

});

}


/* =========================
AGREGAR COMENTARIO
========================= */

function agregarComentario(){

let nombre = document.getElementById("nombreComentario").value;
let texto = document.getElementById("textoComentario").value;

if(nombre === "" || texto === ""){

alert("Complete todos los campos");
return;

}

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

comentarios.push({
nombre: nombre,
texto: texto
});

localStorage.setItem("comentarios", JSON.stringify(comentarios));

document.getElementById("nombreComentario").value = "";
document.getElementById("textoComentario").value = "";

mostrarComentarios();

}


/* =========================
MOSTRAR COMENTARIOS
========================= */

function mostrarComentarios(){

let contenedor = document.getElementById("listaComentarios");

if(!contenedor) return;

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

contenedor.innerHTML = "";

comentarios.forEach(c => {

contenedor.innerHTML += `
<div class="comentario">
<strong>${c.nombre}</strong>
<p>${c.texto}</p>
</div>
`;

});

}


/* =========================
CARGAR TODO AL INICIAR
========================= */

window.onload = function(){

cargarPedidos();
mostrarComentarios();

};
/* CERRAR MODAL SI SE DA CLICK AFUERA */

window.onclick = function(event){

let modal = document.getElementById("modalProducto");

if(event.target == modal){

modal.style.display = "none";

}

}