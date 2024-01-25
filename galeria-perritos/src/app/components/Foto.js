"use client"

import styles from "./Foto.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
function Foto(){
    const [perrito,setPerrito]=useState("/vercel");
    const [estado,setEstado]=useState("/vercel");
    const [habilidad,setHabilidad]=useState("/vercel");
    const url="https://pokeapi.co/api/v2/pokemon/lunatone";
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPerrito(data.sprites.front_default)
            setEstado(data.species.name)
            setHabilidad(data.abilities[0].ability.name)})
        },[])
        
    return(
        <div className={styles.box}>
            
            <div className="contenedor">
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perritos" width={400} height={400}/>
            <h1>{habilidad}</h1>
            </div>
        </div>
    );
};
export default Foto;