function agregarTarea(){
    //obtener el valor del input
    var tarea=document.getElementById("nueva-tarea").value;
    //crear un nuevo elemento en la lista
    var nuevoitem=document.createElement("li");
    //Asignar el valor del input
    nuevoitem.textContent=tarea;
    //Agregar el nueco elemento a la lista
    document.getElementById("tarea-lista").appendChild(nuevoLista);
    //Limpiar el valor del input
    document.getElementById("nueva-tarea").value="" ;
}