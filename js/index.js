window.addEventListener("load", function () {
  console.log("Hola mundo");
});

function mostrarFeedback() {
  var fondoPopupFeedback = document.getElementById("feedback-container");
  var seccionFormulario = document.getElementById("formulario");

  seccionFormulario.classList.add("no-mostrar");
  fondoPopupFeedback.classList.remove("no-mostrar");
  fondoPopupFeedback.classList.add("mostrar");
}

function recolectarDatos() {
  // PASOS 1 y 2: obtenemos los inputs que tienen los datos que nos interesan, y luego obtenemos el valor (los datos). 
  
  // Nombre e email
  var inputNombre = document.getElementById("fnombre");
  var nombre = inputNombre.value;

  var inputMail = document.getElementById("finstagram");
  var mail = inputMail.value;


  var spanNombre = document.getElementById("nombre");
  var spanEmail = document.getElementById("instagram");

    spanNombre.innerText = nombre;
  spanEmail.innerText = mail;

}

function resetearFormulario() {
  var inputNombre = document.getElementById("fnombre");
  var inputMail = document.getElementById("finstagram");
  inputNombre.value = "";
  inputMail.value = "";
}

function enviar(e) {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
}

function cerrarFeedback() {
  var seccionFormulario = document.getElementById("formulario");
  var fondoPopupFeedback = document.getElementById("feedback-container");

  fondoPopupFeedback.classList.remove("mostrar");
  fondoPopupFeedback.classList.add("no-mostrar");
  seccionFormulario.classList.remove("no-mostrar");
}