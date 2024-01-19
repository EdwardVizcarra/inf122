import React from 'react';
import'../styles/Boton.css';

function Boton({funClick, text}){
    return(
<div>
    <button className="boton" onClick={funClick}>{text}</button>
</div>
    );
};
export default Boton;