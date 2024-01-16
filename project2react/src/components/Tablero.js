import React from "react";
import '../styles/Tablero.css';
import Cuadro from "./Cuadro";
function Tablero(){
    const click= (funcion) =>{console.log(click)};
    return (
        
        <div className="tablero">
            <Cuadro valor={0} funcion={click} />
            <Cuadro valor={1} funcion={click}/>
            <Cuadro valor={2} funcion={click}/>
            <Cuadro valor={3} funcion={click}/>
            <Cuadro valor={4} funcion={click}/>
            <Cuadro valor={5} funcion={click}/>
            <Cuadro valor={6} funcion={click}/>
            <Cuadro valor={7} funcion={click}/>
            <Cuadro valor={8} funcion={click}/>
        </div>
    )
}
export default Tablero;