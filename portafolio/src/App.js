import logo from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div className="App">
    
<title>simply-portofolio-design</title>
<div className="main">
    <div className="cuadro-title">
        <img className="image" src={require("./icons/Perfil.svg").default}/>
        <div className="cuadro-cuadrito-title">
        <h1>Edward Vizcarra</h1>
        <p>Software Super junior developer</p>
        <div className="icons">
        <img src={require("./icons/github.svg").default}/>
        <img src={require("./icons/linkedin.svg").default}/>
        <img src={require("./icons/twitter.svg").default}/>
        <img src={require("./icons/youtube.svg").default}/>
        </div>
        </div>


    </div>
    <div className="botones">
    <button className="boton" alert="contact me">Download</button>
    <button className="boton-black" alert="contact me">Contact me</button>
    </div>
    <div className="cuadro-texto">
        <section>
            <div className="cuadro-cuadrito-texto">
                <div className="cuadro-cuadrito-texto-title">
                <h2>7</h2>
                </div>
                <div className="cuadro-cuadrito-texto-texto">
                <p>Years of work experience
                </p>
                </div>
                </div>
                <div className="cuadro-cuadrito-texto">
                    <div className="cuadro-cuadrito-texto-title">
                    <h2>+50</h2>
                    </div>
                    <div className="cuadro-cuadrito-texto-texto">
                    <p>Complete proyects
                    </p>
                    </div>
                    </div>
                    <div className="cuadro-cuadrito-texto">
                        <div className="cuadro-cuadrito-texto-title">
                        <h2>+20</h2>
                        </div>
                        <div className="cuadro-cuadrito-texto-texto">
                        <p>Satisfied costumers
                        </p>
                        </div>
                        </div>
                    
            </section>
    </div>
    <div className="container-image">
        <img className="imagedown"src="assets/images/pictures_wall.jpeg" alt="1"/>  
              <img className="imagedown"src="assets/images/bussiness_man.png" alt="1"/>
        <img className="imagedown"src="assets/images/bussiness_man.png" alt="1"/>  
        <img className="imagedown"src="assets/images/pictures_wall.jpeg" alt="1"/>
                <img className="imagedown"src="assets/images/pictures_wall.jpeg" alt="1"/>  
         <img className="imagedown"src="assets/images/bussiness_man.png" alt="1"/>
    </div>
</div>
</div>

  );
};

export default App;
