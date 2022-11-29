function seleccionarDestino(id) {
  document.querySelectorAll("path").forEach(function (x) {
    x.setAttribute("style", "fill: black");
  });
  document.getElementById("destinos").value = id;
  document.getElementById(id).setAttribute("style", "fill: red");
}
var listado = [
  "Baja California",
  "Baja California Sur",
  "Coahuila",
  "Chihuahua",
  "Durango",
  "Sinaloa",
  "Sonora",
  "Zacatecas",
  "Nuevo León",
  "San Luis Potosí",
  "Tamaulipas",
  "Aguascalientes",
  "Colima",
  "Jalisco",
  "Michoacán",
  "Nayarit",
  "Campeche",
  "Oaxaca",
  "Puebla",
  "Tabasco",
  "Tlaxcala",
  "CDMX",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "México",
  "Morelos",
  "Querétaro",
  "Veracruz",
  "Chiapas",
  "Quintana Roo",
  "Yucatán",
];

function validarhome() {
  var destinos = String(document.getElementById("destinos").value);
  //var asiento  = parseInt(document.getElementById("asiento").value)
  let valido = true;
  //validar que los datos sean correctos, de no serlo, hacerlo saber al usuario

  if (listado.includes(destinos)) {
    document.getElementById("destinos").value = null;
    ir_reservacion();
  }
  if (!listado.includes(destinos)) {
    if (destinos == null || destinos.length == 0 || /^\s+$/.test(destinos)) {
      document.getElementById("alerta_destinos").innerText =
        "Debes seleccionar un destino";
      valido = false;
    } else {
      document.getElementById("alerta_destinos").innerText =
        "Debes de elegir un estado de la república mexicana";
    }
  }
}
function marcarmapa() {
  document.querySelectorAll("path").forEach(function (x) {
    x.setAttribute("style", "fill: black");
  });
  let id = document.getElementById("destinos").value;
  if (listado.includes(id)) {
    document.getElementById(id).setAttribute("style", "fill: red");
  }
}

//Debería agregar los atributos fill=red al elemento de durango, marcando de rojo al estado, pero no lo hace.
// fill="red" es un atributo que llena de color al elemento
