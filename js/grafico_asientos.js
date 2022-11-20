// generando 2 tablas con los asientos del lado izquierdo y derecho del autobus
// estas tablas se generaran dentro de los div con id = "asientos_lado_derecho" y
// id = "asientos_lado_izquierdo" dentro de cada celda de la tabla se genera un boton
//con un id igual al numero de asiento
function graficoAsientos() {
	var asientos_lado_derecho = document.createElement("table")
	var asientos_lado_izquierdo = document.createElement("table")
	var cont = 4
	
	for (i = 0; i < 2; i++ ){

		var fila = document.createElement("tr")

		for(j = 0; j<10; j++){

		const boton_asiento = document.createElement('button')
		boton_asiento.setAttribute("onclick", "anadirAsiento(this.id)")
		boton_asiento.innerHTML = cont + '<img src = "../img/asiento.png" id="imagen_asiento"/>'
        boton_asiento.setAttribute("id", cont)
		let celda = document.createElement("td")
		
		celda.appendChild(boton_asiento)
		fila.appendChild(celda)
		cont+=4

		}

		asientos_lado_derecho.appendChild(fila)
        cont=3
	} 

    cont=2

	for (i = 0; i < 2; i++ ){

		var fila = document.createElement("tr")

		for(j = 0; j<10; j++){

		const boton_asiento = document.createElement('button')
		boton_asiento.setAttribute("onclick", "anadirAsiento(this.id)")
		boton_asiento.innerHTML = cont + '<img src = "../img/asiento.png" id="imagen_asiento"/>'
        boton_asiento.setAttribute("id", cont)
		let celda = document.createElement("td")
		
		celda.appendChild(boton_asiento)

		fila.appendChild(celda)
		cont+=4

		}

		asientos_lado_izquierdo.appendChild(fila)
        cont=1

	}


	document.getElementById("lado_derecho").appendChild(asientos_lado_derecho)
	document.getElementById("lado_izquierdo").appendChild(asientos_lado_izquierdo)



}
graficoAsientos()