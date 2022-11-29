
function seleccionarDestino(id){
    document.querySelectorAll('path')
    .forEach((function(x){ x.setAttribute("style","fill: black");}))
    document.getElementById("nombre").value = id
    document.getElementById(id).setAttribute("style", "fill: red")


    
}











//Debería agregar los atributos fill=red al elemento de durango, marcando de rojo al estado, pero no lo hace.
// fill="red" es un atributo que llena de color al elemento