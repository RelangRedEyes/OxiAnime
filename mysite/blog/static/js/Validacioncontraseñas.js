fono = document.getElementById("fono").Value;

/*Validacion de contraseña*/
$(document).ready(function() {

	$('#pass2').keyup(function() {

		var pass1 = $('#pass1').val();
		var pass2 = $('#pass2').val();

		if ( pass1 == pass2 ) {
			$('#error2').css("background", "url(check.png)");
		} else {
			$('#error2').css("background", "url(check-.png)");
		}

	});

});

/*Validacion de telefono*/
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}
