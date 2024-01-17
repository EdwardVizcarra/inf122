import React from 'react';
import '../styles/Tablero.css';
import CuadroB from './CuadroB';

function TableroD({ cuadros, onClick }) {
    function renderizarCuadro(i) {
        return (
            <CuadroB
                valor={cuadros[i]}
                funcion={() => onClick(i)}
            />
        );
    }

    return (
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
    function calcula(cuadros){
        const lineas=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i< lineas.length;i++){
            const [a,b,c]=lineas[i];
            if(cuadros[a]===lineas[i]&&cuadros[b]===lineas[i]&&cuadros[c]===lineas[i]){
                return cuadros[a];
    
            }
        }
}
}
export default TableroD;