import React from 'react';
import Boton from '../components/Boton';
import '../styles/Login.css'
function click(x){
    const consolk=console.log(x);
}
function login({}){
    return(
        <div className="main">
        <div className="padre">
            <div className="usuario">
    <label>Usuario</label>
    <input placeholder="ingresar Usuario"></input>
    </div>
    <div className="contraseña">
    <label>Contraseña</label>
    <input placeholder="ingresar contraseña"></input>
    </div>
    <div className="bottons">
    <Boton funclick={()=>click("Login")} text="Login"/>
    <Boton funClick={click} text="Registrar"/> 
    <Boton funClick={click} text="Editar"/>
    
    </div>
</div>
</div>
    );
};
export default login;