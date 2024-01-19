import React from 'react';
import {Link, Outlet} from 'react-router-dom';
function NavBar(){
    return(
        <div>
        <nav>
            <ul>
                <li>
                    <link to="/">Inicio </link>
                    
                </li>
                <li>
                    <link to="/login">Login</link>
                </li>
                <li>
                    <link to="/resgistro">Registro</link>
                </li>
                <li>
                    <link to="/perfil">Perfil</link>
                </li>

            </ul>
        </nav>
     <Outlet/>
     </div>
    );
};
export default NavBar;