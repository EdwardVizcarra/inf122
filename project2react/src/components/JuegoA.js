import React from 'react';
import Historial from '../components/Historial';
import TableroE from '../components/TableroE';
import { useState } from 'react';
function Juego(){
    const [historial, setHistorial]=useState([
        {
        cuadros:Array(9).fill(null)
        },
    ]);
    const [nroMovimiento, setNroMovimiento]  = useState(0);
    const [cuadros, setCuadros]= useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);

    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        console.log("cuadrosTemp", cuadros);
        if(cuadros[i]===null){
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            const click = (i) => {
                const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
                console.log("nuevoMovimiento", nuevoMovimiento);
                const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
                console.log("movimientoActual", movimientoActual);
                const cuadros = movimientoActual.cuadros.slice();
                console.log("cuadrosTemp", cuadros);
        }
    }

}
}
export default Juego;