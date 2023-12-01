function enviar(){
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    fecha = document.getElementById("date").value;

    alert("Turno cargado con exito");
    document.write("<br>")
    document.write("Usted con el nombre de "+nombre + " " + apellido+" esta citado el dia:"+fecha+" para asistir al consultorio.")
    
}

   