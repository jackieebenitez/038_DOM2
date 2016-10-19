//recuerda que en el HTML usaste /required que es una palabra
//reservada que se puede usar para el html y que te dice que los
//espacios son obligatorios. 
function validateForm(){
	// a continuación están las expresiones regulares, son como
	//operaciones que se mandan llamar en los if
	var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var regexNombre = /^[A-Z][a-z]*$/;
	// hago las variables y las mando llamar del html
	var name = document.getElementById("name").value
	var lastname = document.getElementById ("lastname").value;
	var mail = document.getElementById ("input-email").value; 
	var password = document.getElementById("input-password").value;
	var bicis = document.getElementById("select").selectedIndex;

	if (name == "" || lastname == "" || mail == "" || password == ""){
		alert("Todos los espacios son obligatorios :D");
		return // esto hace que se acabe, ya no se ejecuta lo de abajo. 
	};

	var boxes = document.getElementsByClassName("input-box") //vamos a ir a todos los elementos con clase input-box
	// cuando entra el for lo que hace es checar cada uno de los campos y si esta bien mágicamente desaparecen y aparecen (sin que yo los vea)
	// lo que aparece son los campos que aún tienen error :D yeiii
	for (var i = 0; i < boxes.length; i++){ 
		console.log(boxes[i].lastChild.nodeName); //esto lo hicimos para checar en la consola que es lo que aparece al presionar registrar, 
	//debe aparecer primero #text y luego SPAN (con mayus)
		if (boxes[i].lastChild.nodeName === "SPAN") // si boxes[i] en su último hijo es igual a un span entras a la condición
		{
			boxes[i].removeChild(boxes[i].lastChild); // esta condición dice que va a remover al último hijo del papá
		}
	}
	//inician mis condiciones
	//si regexNombre es diferente a lo que hace la expresión regular
	//entonces manda un alert que diga ... y así con cada uno. 
	if (!regexNombre.test(name)){
		var boxname = document.getElementById("boxname");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("La primer letra de tu nombre debe ser mayúscula"));
		boxname.appendChild(span);
	} else {
		var boxname = document.getElementById("boxname");
		//var span = document.createElement("span");
		var imagen = document.createElement("img");
		imagen.setAttribute("src","http://blog.mundoedu.com.br/wp-content/uploads/2015/04/Emoji-Smiley-07-e1428357228551.png")
		span.appendChild(imagen);
		//span.appendChild(document.createElement("wuju!"));
		boxname.appendChild(span);
	}
	if (!regexNombre.test(lastname)){
		var boxlastname = document.getElementById("boxlastname");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("La primer letra de tu apellido debe ser mayúscula"));
		boxlastname.appendChild(span);
	}
	if(!regexEmail.test(mail)){
		var boxmail = document.getElementById("boxmail");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Escribe de nuevo tu mail"));
		boxmail.appendChild(span);
	}
	if(password.length < 6){
		var boxpswd = document.getElementById("boxpswd");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Tu contraseña debe contener 6 caracteres"));
		boxpswd.appendChild(span);
	}
	if(bicis === 0){
		var bicis = document.getElementById("boxbicis");
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("¡Oye elige tu tipo de bici!"));
		bicis.appendChild(span);
	}
}


/*//Esto
var boxes = document.getElementsByClassName("input-box") //vamos a ir a todos los elementos con clase input-box
	for (var i = 0; i < boxes.length; i++){ //
	var span = document.createElement("span");
	boxes[i].appendChild(span);
	}
//Es lo mismo que esto
var span = document.createElement
var div = boxes[i];
div.appendChild(span);*/




/*var span = document.getElementById("span");
var spanNombre = document.getElementByClassName("name")[0]
spanNombre.appendChild(span)*/

	