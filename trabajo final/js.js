function enviar(){
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    fecha = document.getElementById("date").value;

    alert("Turno cargado con exito");
    document.write("Recuerde no olvidar estos datos para el dia de su turno");
    document.write("<br>")
    document.write(nombre + " " + apellido)
    document.write("<br>")
    document.write(direccion);
    document.write("<br>")
    document.write(fecha); 
}

function boton(){
    edad1 = document.getElementById("edad1").value;
    edad2 = document.getElementById("edad2").value;
    edad3 = document.getElementById("edad3").value;
    suma(edad1,edad2,edad3);
}

function suma(e1,e2,e3){
   var suma1 = parseInt(e1) + parseInt(e2) + parseInt(e3);
   
   alert("la suma de las edades es:" + suma1)
}
    