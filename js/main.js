

//al presionar se añade el numero de asiento al campo con el mismo nombre
function seleccionarAsiento(id){

	document.getElementById("asiento").value = id
	
}


function reservar(){

	var nombre = String(document.getElementById("nombre").value)
	var asiento  = parseInt(document.getElementById("asiento").value)
	let valido = true
	//validar que los datos sean correctos, de no serlo, hacerlo saber al usuario
	if(localStorage.getItem("dueno_asiento_"+ asiento) != null && localStorage.getItem("estatus_asiento_"+ asiento) ){
		alert("El asiento que escogió está ocupado, escoja uno diferente")
	}

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		document.getElementById("alerta_nombre").innerText = "El campo de nombre es obligatorio"
		valido = false
	}
	if(isNaN(asiento)){
		document.getElementById("alerta_asiento").innerText = "Por favor ingrese un numero de asiento valido"
		valido = false
		
	}

	if(valido){
		localStorage.setItem("dueno_asiento_"+asiento, nombre)
		localStorage.setItem("estatus_asiento_"+asiento, "reservado")
		document.getElementById(String(asiento)).setAttribute("style", "background-color:red")
		document.getElementById("nombre").value = null
		document.getElementById("asiento").value = null

	}





}
//funcion para eliminar una reservacion
function eliminar(){
	var nombre = String(document.getElementById("nombre").value)
	var asiento  = parseInt(document.getElementById("asiento").value)
	let valido = true

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		document.getElementById("alerta_nombre").innerText = "El campo de nombre es obligatorio"
		valido = false
	}
	if(isNaN(asiento)){
		document.getElementById("alerta_asiento").innerText = "Por favor ingrese un numero de asiento valido"
		valido = false
		
	}
	if(valido){
		localStorage.setItem("dueno_asiento_"+asiento, null)
		localStorage.setItem("estatus_asiento_"+asiento, null)
		document.getElementById(String(asiento)).setAttribute("style", "background-color:#8F7CEC")

	}


}
// funcion para probar código experimental
function pruebas(){
	localStorage.clear()
}




//Al presionar el botón el programa intentará realizar la reservación, si el lugar esta disponible se realizará la reservación, 
//pero si el lugar está ocupado el programa mostrará un mensaje indicando que el lugar ya está ocupado y deberá seleccionar otro lugar.
function ir_reservacion(){
	window.location.href="index.html"
}