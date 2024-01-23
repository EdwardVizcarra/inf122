import Image from "next/image";
import style from './page.module.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from 'react';

export default function Home() {
    const [nroClicks,setNumcliks] =useState(0);
    const [show,setshow]=useState(true);
    const click=()=> {
        setNumClicks(nroClicks + 1);
    }
    const clickMas3= () =>{
        setNumClicks(nroClicks + 3);
        console.log()
    }
    const clickMenos = () => {
        setNumClicks(nroClicks -1);
    }
    const reiniciar =() => {
    serNumClicks(0);
    console.log('reiniciar');
    }
    const mostrar = () => {
        setshow(!show);
    }

    return(
        <h1>Contador</h1>

    );
};