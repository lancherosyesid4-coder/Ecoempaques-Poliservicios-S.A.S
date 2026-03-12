// DATOS DE ACCESO

const usuarioAdmin = "admin";
const passwordAdmin = "1234";



// FORM LOGIN

document.getElementById("formLogin").addEventListener("submit", function(e){

e.preventDefault();

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;



// VALIDACION

if(usuario === usuarioAdmin && password === passwordAdmin){

alert("Acceso correcto");

window.location.href = "panel.html";

}

else{

alert("Usuario o contraseña incorrectos");

}

});