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
  var inputInstagram = document.getElementById("finstagram");
  var inputCiudad = document.getElementById("fciudad");
  var inputBarrio = document.getElementById("fbarrio");



  inputNombre.value = "";
  inputInstagram.value = "";
  inputCiudad.value = "";
  inputBarrio.value = "";
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



/*===================animaciones===========================

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.intro .fade-in');

  // If the animation has already been started
  if ($elem.hasClass('start')) return;

  if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('start');
  }
}

// Capture scroll events
$(window).scroll(function(){
  checkAnimation();
});

 */
