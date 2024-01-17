import React, {useState} from 'react';
import Nota from './Nota';
function ListaNotas(){
    const[notas, setNotas]=useState([]);
    const[texto, setTexto]=useState("");
    const addNota= () =>{
      
        console.log("Agregar nota");

    };
    const onDelete=() => {
        console.log("Eliminar");
    };
    const onEdit=() => {
        console.log("Editar");
    };
    return (
        <div className ="eu">
            <button className="boton" onClick={addNota}>Agregar</button>{
                Nota.map((nota) =>
                {})
            }
            </div>
    )

}
export default ListaNotas;
