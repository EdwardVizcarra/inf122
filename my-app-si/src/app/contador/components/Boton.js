import styke from './Boton.module.css';
function Boton({texto, esBotonClick, funcionClick}){
    return(
        <button className={esBotonClick ? style["boton-click"]:style["boton-reiniciar"]} onclick={funcionClick}>
            {texto}
        </button>
    )
}