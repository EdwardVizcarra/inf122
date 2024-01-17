import React from 'react';
import '../styles/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';
function TableroE({cuadros, onclick}){
    function renderizarCuadro(i){
        return(
            <CuadroB valor={cuadros[i]} funcion={() => onclick(i)}/>

        );
    }
    return(
        <div>
        <h1>Siguiente jugador: </h1>
        <div className="tablero">
            {renderizarCuadro(0)}
            {renderizarCuadro(1)}
            {renderizarCuadro(2)}
            {renderizarCuadro(3)}
            {renderizarCuadro(4)}
            {renderizarCuadro(5)}
            {renderizarCuadro(6)}
            {renderizarCuadro(7)}
            {renderizarCuadro(8)}
        </div>
        </div>
    );

}
export default TableroE;