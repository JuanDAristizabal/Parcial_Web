import '../App.css';
import img from "../horca.png"

function Game(){
    return (
    <div className='container'>
       <div className="texto">
            <h1><b>AHORCADO</b></h1>
            <h3>Encuentra la palabra - Ingrese una letra</h3>
        </div>
        <div className="medio">
            <div className="horca">
                <div className="cuerpo">
                </div>
            </div>
            <div className="palabra">
            </div>
        </div>
        <div className="letras">
            <img src={img} alt="" className="s" />
        </div>
    </div>
    );
};

export default Game;