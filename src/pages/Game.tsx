import '../Game.css';
import img from "../imgs/horca.png"
interface Props {
    palabra: string;
}

const Game = (props: Props) => {
    const {palabra} = props;
    return (
    <div className='container'>
       <div className="texto">
            <h1><b>AHORCADO</b></h1>
            <h3>Encuentra la palabra - Ingrese una letra</h3>
        </div>
        <div className="medio">
            <div className="horca">
            <img src={img} alt="" className="s" />
                <div className="cuerpo">
                </div>
            </div>
            <div className="letras">
            </div>
        </div>
        <div className="palabra">
            <h1>{palabra}</h1>
        </div>
    </div>
    );
};

export default Game;