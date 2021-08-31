
// Cargar jquery
$(function(){


//Al hacer click sobre el correo que aparezca un alert
	$('#enviarCorreo').click(function(event) {
		alert("El correo fue enviado correctamente...");
	});

//hacer doble click y modificar el color de texto de los títulos ingredientes y preparación a color rojo de manera individual
	$("h4.ingredientes").on("dblclick", function(){
 		$(this).css('color', 'red');
	});


 	$("h4.preparacion").on("dblclick", function(){
 		$(this).css('color', 'red');
	});

//Al hacer click en el título panqueques que se encuentra en la sección recetas relacionadas, el contenido desaparecerá y aparecerá al volver hacer click en el título
	$(".panqueques").click(function(){
    	$('.texto-panqueques').toggle();
  });

//Al hacer click en el título tiramisú que se encuentra en la sección recetas relacionadas, el contenido desaparecerá y aparecerá al volver hacer click en el título
	$(".tiramisu").click(function(){
    	$('.texto-tiramisu').toggle();
  });

//Al hacer click en el título plateadas que se encuentra en la sección recetas relacionadas, el contenido desaparecerá y aparecerá al volver hacer click en el título
	$(".plateada").click(function(){
    	$('.texto-plateada').toggle();
  });


//línea de código destinada al funcionamiento de los tooltip
	$('[data-toggle="tooltip"]').tooltip()
	
});