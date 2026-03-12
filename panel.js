// CARGAR PEDIDOS GUARDADOS

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

let tabla = document.getElementById("tablaPedidos");



// MOSTRAR PEDIDOS EN TABLA

function mostrarPedidos(){

tabla.innerHTML = "";

pedidos.forEach((pedido,index)=>{

let claseEstado = "";

if(pedido.estado === "Pendiente"){
claseEstado = "estadoPendiente";
}

if(pedido.estado === "Enviado"){
claseEstado = "estadoEnviado";
}

if(pedido.estado === "Entregado"){
claseEstado = "estadoEntregado";
}



tabla.innerHTML += `

<tr>

<td>${pedido.empresa}</td>

<td>${pedido.producto}</td>

<td>${pedido.tipo}</td>

<td>${pedido.tamano}</td>

<td>${pedido.cantidad}</td>

<td class="${claseEstado}">${pedido.estado}</td>

<td>

<button onclick="cambiarEstado(${index})">
Cambiar
</button>

</td>

</tr>

`;

});

}



// CAMBIAR ESTADO DEL PEDIDO

function cambiarEstado(i){

if(pedidos[i].estado === "Pendiente"){

pedidos[i].estado = "Enviado";

}

else if(pedidos[i].estado === "Enviado"){

pedidos[i].estado = "Entregado";

}

else{

pedidos[i].estado = "Pendiente";

}

localStorage.setItem("pedidos",JSON.stringify(pedidos));

mostrarPedidos();

}



// AGREGAR PEDIDO MANUAL DESDE EL PANEL

function agregarPedidoManual(){

let empresa = document.getElementById("empresaManual").value;

let producto = document.getElementById("productoManual").value;

let tipo = document.getElementById("tipoManual").value;

let tamano = document.getElementById("tamanoManual").value;

let cantidad = document.getElementById("cantidadManual").value;



if(empresa=="" || producto=="" || cantidad==""){

alert("Completa todos los campos");

return;

}



pedidos.push({

empresa:empresa,
producto:producto,
tipo:tipo,
tamano:tamano,
cantidad:cantidad,
estado:"Pendiente"

});



localStorage.setItem("pedidos",JSON.stringify(pedidos));



mostrarPedidos();

}



// MOSTRAR PEDIDOS AL CARGAR

mostrarPedidos();