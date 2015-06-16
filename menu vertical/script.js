$(document).ready(function() {
$(".submenu").hide();
$(".contenedor--menu").hide();

   $(".icono").click(function() {
    $(".contenedor--menu").animate({
            width: "toggle"
            //opacity:"toggle"
          
            //width: "show"
            //width: "hide"
           
        
        });
  });   

    

$( ".submenu" ).before(innerHTML = "\u25bc");
    
    
    $('.submenu')
    //despliega solo el submenu de ese menu concreto
    $('.menu__enlace').click(function(event){
		var elem = $(this).next();
        //elem.addClass('activo_submenu');
    
		if(elem.is('ul')){
                       
			event.preventDefault();
			//$('.menu__enlace ul:visible').not(elem).slideUp();
			elem.slideToggle();
		}
	});
    
    
 
    
});//fin de la funcion ready