var Usuario;
var Prestamo;
var tipoLibro;
var fechaDevolucion;

function Devolucion(){
    /*Recordatorio personal: Let lo estamos usando acá porque estas 3 variables las usaremos solo en esta sección*/
    let dato = new Date();
    let fechaActual = String(dato.getDate()).padStart(2, '0') + '/' + String(dato.getMonth() + 1).padStart(2, '0') + '/' + dato.getFullYear();
    let fechaPrestamo = fechaActual;
    alert("La fecha en que hizo el prestamo fue el " + fechaPrestamo);
}


alert("Primero Dios funcione");

Usuario=prompt("Digite su tipo de usuario: ");
if(Usuario=="Estudiante" || Usuario=="estudiante" || Usuario=="ESTUDIANTE"){
    tipoLibro=prompt("Digite el tipo de libro que desea: ");
        if(tipoLibro == "Ciencias Basicas y Tecnologia" || tipoLibro == "ciencias básicas y tecnología" || tipoLibro == "ciencias basicas y tecnologia" ){
            Prestamo = 3;
            alert("El tiempo maximo para prestar un libro es de 3 dias");
            Devolucion();
        }
        else{
            if(tipoLibro == "Tesis" || tipoLibro == "TESIS" || tipoLibro == "tesis" ){
                Prestamo = 15;
                alert("Tiempo maximo para prestar un libro: 15 dias");
                Devolucion();
            }else{
                if(tipoLibro == "Obras Literarias" || tipoLibro == "obras Literarias" || tipoLibro == "obras literarias" ){
                    Prestamo = 7;
                    alert("Tiempo maximo para prestar un libro: 7 dias");
                    Devolucion();
                }else{
                    if(tipoLibro == "Otros" || tipoLibro == "OTROS" || tipoLibro == "otros" ){
                        tiempoPrestamo = 2;
                        alert("Tiempo maximo para prestar un libro: 2 dias");
                        Devolucion();
                    }else{
                        alert("Opcion no valida");
                    }
                }
            }
        }
}