"use client"

import Image from 'next/image';
import {useEffect, useState } from "react";
import styles from "./dogs.module.css";
function Dogs(){
    const [dog,setDog]=useState("/vercel.svg");
    const [dograza,setDograza]=useState("/vercel.svg");
    const url ="https://dog.ceo/api/breeds/image/random";
    const url2="https://dog.ceo/api/breed/sheepdog/english/images/random";

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDog(data.message)})
        },[])
        useEffect(()=> {
            fetch(url2)
            .then(ress => ress.json())
            .then(dataa => {
                setDograza(dataa.message)})
            },[])

return(
    <div className={styles.box}>
    <h1>Dogs</h1>
    <Image src={dog} alt="dog" width={500} height={400}/>
    <Image src={dograza} alt="dog" width={500} height={400}/>


</div>
);
};
export default Dogs;
//<img src='https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_4048.jpg'/>