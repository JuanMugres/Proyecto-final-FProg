

function main() {
	let tabla = document.createElement("table")
	let fila = document.createElement("tr")
	let celda = document.createElement("td")

	for(i = 0; i < 10; i++){
		fila.appendChild(celda)
	}


	for (var i = 0; i < 4; i++) {
		tabla.appendChild(fila)
	}
	tabla.setAttribute("border", 2)
	document.getElementById("tabla").appendChild(tabla)


}

main()

