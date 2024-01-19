import React from 'react';
import Boton from '../components/Boton';
function resgistro({}){
    return(
        <div>
    <label>Usuario</label>
    <input placeholder="ingresar Usuario"></input>
    <label>Apellido</label>
    <input placeholder="ingresar contraseña"></input>
    <div className="bottons">
    <Boton funclick={()=>click("Login")} text="Login"/>
    <Boton funClick={click} text="Registrar"/> 
    <Boton funClick={click} text="Editar"/>
    
        </div>
        </div>

    );
};